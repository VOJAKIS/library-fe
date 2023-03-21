import { Component } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { untilDestroyed } from '@ngneat/until-destroy';
import { ToastService } from 'angular-toastify';
import { Book } from 'app/common/model/book.model';
import { Borrowing } from 'app/common/model/borrowing.model';
import { User, UserResponse } from 'app/common/model/user.model';
import { BookService } from 'app/common/service/book.service';
import { BorrowingService } from 'app/common/service/borrowing.service';
import { UserService } from 'app/common/service/user.service';

@Component({
  selector: 'app-borrowing-detail-page',
  templateUrl: './borrowing-detail-page.component.html',
  styleUrls: ['./borrowing-detail-page.component.css']
})
export class BorrowingDetailPageComponent {
	borrowing?: Borrowing;
	private borrowingId: number | null;
	
	books?: Book[];
	private bookId: number | null;
	
	users?: UserResponse;
	private userId: number | null;

	constructor(private router: Router,
		private route: ActivatedRoute,
		private borrowingService: BorrowingService,
		private userService: UserService,
		private bookService: BookService,
		private toastService: ToastService
	) {
		this.borrowingId = Number(route.snapshot.paramMap.get('borrowingId'));
		this.bookId = Number(route.snapshot.paramMap.get('bookId'));
		this.userId = Number(route.snapshot.paramMap.get('userId'));
		this.getBorrowing();
		this.getBooks();
		this.getUsers();
	}

	cancel(): void {
		this.router.navigate(['borrowing']);
	}

	getBorrowing(): void {
		if (this.borrowingId) {
			this.borrowingService.getBorrowing(this.borrowingId).subscribe((borrowing: Borrowing) => {
				this.borrowing = borrowing;
			})
		}
	}

	getUsers(): void {
		if (this.userId) {
			this.userService.getUsers().pipe(untilDestroyed(this)).subscribe((users: UserResponse) => {
				this.users = users;
			})
		}
	}

	getBooks(): void {
		if(this.bookId) {
		  this.bookService.getBooks().pipe(untilDestroyed(this)).subscribe((books: Book[]) => {
			this.books = books;
		  });
		}
	  }
			
	updateBorrowing(borrowing: Borrowing): void {
		this.borrowingService.updateBorrowing(borrowing).pipe(untilDestroyed(this)).subscribe(() => {
			this.toastService.success('Pôžička bola úspešne upravená.');
		}, () => {
			this.toastService.error('ERROR: Pôžička nebola úspešne upravená.');
		});
	}
}
