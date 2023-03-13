import { Component } from '@angular/core';
import { Borrowing } from 'app/common/model/borrowing.model'
import { BorrowingService } from 'app/common/service/borrowing.service';

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent {

	constructor(private service: BorrowingService) {
		this.getBorrowings();
	  }
	
	  borrowings: Array<Borrowing> = [];
	  borrowing?: Borrowing;
	
	  getBorrowings() : void {
		this.service.getBorrowings().subscribe((borrowings: Borrowing[]) => {
			this.borrowings = borrowings.map((borrowing?: any) => {
				return {
					id: borrowing.id,
					bookId: borrowing.book.id,
					customerId: borrowing.customer.id,
					dateOfBorrowing: borrowing?.dateOfBorrowing
				}
			});
		});
	  }
	
	  selectBorrowingToUpdate(borrowingId: number): void {
		this.service.getBorrowing(borrowingId).subscribe((borrowing: Borrowing) => {
			this.borrowing = borrowing;
		});
	  }
	
	  createBorrowing(borrowing: Borrowing): void {
		this.service.createBorrowing(borrowing).subscribe(() => {
		  console.log('Výpožička bola vytvorená.');
		  this.getBorrowings();
		});
	  }
	
	  updateBorrowing(borrowing: Borrowing): void {
		this.service.updateBorrowing(borrowing).subscribe(() => {
		  console.log('Výpožička bola aktualizovaná.');
		  this.getBorrowings();
		});
	  }
	
	  deleteBorrowing(borrowingId: number): void {
		this.service.deleteBorrowing(borrowingId).subscribe(() => {
		  console.log('Výpožička bola vymazaná.');
		  this.getBorrowings();
		});
	  }
	
}
