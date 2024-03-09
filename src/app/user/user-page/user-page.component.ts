import { Component, OnDestroy, TemplateRef } from '@angular/core';
import { User, UserResponse } from 'app/common/model/user.model';
import { UserService } from 'app/common/service/user.service';
import { Subscription } from 'rxjs';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';
import { Pagination } from 'app/common/model/pagination.model';

@UntilDestroy()
@Component({
	selector: 'app-user-page',
	templateUrl: './user-page.component.html',
	styleUrls: ['./user-page.component.css']
})
export class UserPageComponent implements OnDestroy {
	
	constructor(
		private service: UserService,
		private toastService: ToastService,
		private router: Router,
		private modalService: NgbModal
	) {
		this.getUsers();
	}
	
	private getListSubscription?: Subscription;

	user?: User;
	// users: Array<User> = [];

	users?: UserResponse;

	openModal(content: TemplateRef<any>): void {
		this.modalService.open(content, {
			size: 'sm'
		});
	}
	

	ngOnDestroy(): void {
		this.getListUnsubscribe();
	}

	getListUnsubscribe(): void {
		if (this.getListSubscription) {
			this.getListSubscription.unsubscribe();
			this.getListSubscription = undefined;
		}
	}

	getUsers(pagination?: Pagination): void {
		/* this.service.getUsers().pipe(untilDestroyed(this)).subscribe((users: User[]) => {
			this.users = users;
		}) */
		this.service.getUsers(pagination).pipe(untilDestroyed(this))
			.subscribe((users: UserResponse) => {
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
