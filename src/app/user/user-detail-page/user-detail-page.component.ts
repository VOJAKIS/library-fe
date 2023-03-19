import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { ToastService } from 'angular-toastify';
import { User } from 'app/common/model/user.model';
import { UserService } from 'app/common/service/user.service';

@Component({
  selector: 'app-user-detail-page',
  templateUrl: './user-detail-page.component.html',
  styleUrls: ['./user-detail-page.component.css']
})
export class UserDetailPageComponent {
	user?: User;

	private userId: number | null;

	constructor(private router: Router,
		private route: ActivatedRoute,
		private service: UserService,
		private toastService: ToastService
	) {
		this.userId = Number(route.snapshot.paramMap.get('userId'));
		this.getUser();
	}

	cancel(): void {
		this.router.navigate(['user']);
	}

	getUser(): void {
		if (this.userId) {
			this.service.getUser(this.userId).pipe(untilDestroyed(this)).subscribe((user: User) => {
				this.user = user;
			})
		}
	}
			
	updateUser(user: User): void {
		this.service.updateUser(user).pipe(untilDestroyed(this)).subscribe(() => {
			this.toastService.success('Používateľ bol úspešne upravený.');
		}, () => {
			this.toastService.error('ERROR: Používateľ nebol úspešne upravený.');
		});
	}

}
