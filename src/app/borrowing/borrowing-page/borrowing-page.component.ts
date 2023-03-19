import { Component, OnDestroy } from '@angular/core';
import { Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Book } from 'app/common/model/book.model';
import { Borrowing } from 'app/common/model/borrowing.model'
import { User } from 'app/common/model/user.model';
import { BookService } from 'app/common/service/book.service';
import { BorrowingService } from 'app/common/service/borrowing.service';
import { UserService } from 'app/common/service/user.service';
import { Subscription } from 'rxjs';

@UntilDestroy()
@Component({
  selector: 'app-borrowing-page',
  templateUrl: './borrowing-page.component.html',
  styleUrls: ['./borrowing-page.component.css'],
})
export class BorrowingPageComponent implements OnDestroy {
	constructor(
		private borrowingService: BorrowingService,
		private userService: UserService,
		private bookService: BookService,
		private router: Router
	) {
		this.getUsers();
		this.getBooks();
		this.getBorrowings();
	}

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

	users?: User[];
	books?: Book[];
	borrowings: Array<Borrowing> = [];
	borrowing?: Borrowing;

	getUsers(): void {
		this.userService.getUsers().pipe(untilDestroyed(this)).subscribe((users: User[]) => {
			this.users = users;
		})
	}
	getBooks(): void {
		this.bookService.getBooks().pipe(untilDestroyed(this)).subscribe((books: Book[]) => {
			this.books = books;
		})
	}

	getBorrowings(): void {
		this.borrowingService.getBorrowings().pipe(untilDestroyed(this)).subscribe((borrowings: Borrowing[]) => {
			this.borrowings = borrowings.map((borrowing?: any) => {
				return {
					id: borrowing.id,
					bookId: borrowing.book,
					customerId: borrowing.customer,
					dateOfBorrowing: borrowing?.dateOfBorrowing,
				};
			});
		});
	}

	selectBorrowingToUpdate(borrowingId: number): void {
		this.router.navigate(['borrowing', borrowingId]);
	}

	createBorrowing(borrowing: Borrowing): void {
		this.borrowingService.createBorrowing(borrowing).subscribe(() => {
			console.log('Výpožička bola vytvorená.');
			this.getBorrowings();
		});
	}

	updateBorrowing(borrowing: Borrowing): void {
		this.borrowingService.updateBorrowing(borrowing).pipe(untilDestroyed(this)).subscribe(() => {
			console.log('Výpožička bola aktualizovaná.');
			this.getBorrowings();
		});
	}

	deleteBorrowing(borrowingId: number): void {
		this.borrowingService.deleteBorrowing(borrowingId).pipe(untilDestroyed(this)).subscribe(() => {
			console.log('Výpožička bola vymazaná.');
			this.getBorrowings();
		});
	}
}
