import { Component } from '@angular/core';
import { Borrowing } from 'app/common/model/borrowing.model'

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent {

	borrowing?: Borrowing;

	borrowings: Array<Borrowing> = [];

	constructor () {
		// this.borrowings.push({id:1677955020379, bookId:1677955023794, userId:1677955023684});
	}

	createBorrowing(borrowing: Borrowing): void {
		this.borrowings.push(borrowing);
		console.log('BORROWINGS: ', this.borrowings);
	}

	updateBorrowing(borrowing: Borrowing): void {
		const index = this.borrowings.findIndex(borrowingcik => borrowingcik.id === borrowing.id);
		if (index !== -1) {
			this.borrowings[index] = borrowing;
			this.borrowing = undefined;
		}
	}

	selectBorrowingToUpdate(borrowingId: number): void {
		this.borrowing = this.borrowings.find(borrowing => borrowing.id === borrowingId);
	}

	deleteBorrowing(borrowingId: number): void {
		const index = this.borrowings.findIndex(borrowing => borrowing.id === borrowingId);
		if (index !== -1) {
			this.borrowings.splice(index, 1);
			console.log('DELETED USER with ID: ', borrowingId);
		}
	}
	
}
