import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy } from '@angular/core';
import { User } from 'app/common/model/user.model';
import { UserService } from 'app/common/service/user.service';
import { Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
	selector: 'app-user-page',
	templateUrl: './user-page.component.html',
	styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnDestroy {

	private getListSubscription?: Subscription;

	ngOnDestroy(): void {
		this.getListUnsubscribe();
	}
	getListUnsubscribe(): void {
		if (this.getListSubscription) {
			this.getListSubscription.unsubscribe();
			this.getListSubscription = undefined;
		}
	}

	user?: User;
	users: Array<User> = [];

	constructor(
		private service: UserService,
		private toastService: ToastService,
		private router: Router
	) {
		this.getUsers();
	}

	getUsers(): void {
		this.service.getUsers().pipe(untilDestroyed(this)).subscribe((users: User[]) => {
			this.users = users;
		})
	}

	createUser(user: User): void {
		this.service.createUser(user).subscribe(user => {
			console.log('Používateľ bol úspešne uložený.');
			this.getUsers();
		})
	}

	selectUserToUpdate(userId: number): void {
		this.router.navigate(['user', userId]);
	 }
	 	
	updateUser(user: User): void {
		this.service.updateUser(user).subscribe(() => {
		  	console.log('Používateľ bol úspešne upravený.');
		  	this.getUsers();
		});
	}
	
	deleteUser(userId: number): void {
		if (window.confirm('Naozaj chcete vymazať osobu?')) {
			this.service.deleteUser(userId).pipe(untilDestroyed(this)).subscribe(() => {
				this.toastService.success('Používateľ bol úspešne vymazaný.');
				this.getUsers();
			}, () => {
				this.toastService.success('ERROR: Používateľ nebol úspešne vymazaný.');
			})
		}
	}
}
