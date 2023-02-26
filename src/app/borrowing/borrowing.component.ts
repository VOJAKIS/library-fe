import { Component } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { Borrowing } from 'app/model/borrowing.model'

@Component({
  selector: 'app-borrowing',
  templateUrl: './borrowing.component.html',
  styleUrls: ['./borrowing.component.css']
})
export class BorrowingComponent {
	lastIndex: number = 0;

	borrowingForm: FormGroup;

  borrowings: Array<Borrowing> = [];

  constructor() {
    this.borrowingForm = new FormGroup({
			id: new FormControl(),
			book: new FormControl(),
			user: new FormControl(),
		})
  }

  saveBorrowing(): void {
		let values = this.borrowingForm.value;
		
		for (let i = 0; i<this.borrowings.length; i++) {
			if (this.borrowingForm.value.id == this.borrowings[i].id) {
				this.borrowings[i].book = values.name;
				this.borrowings[i].book = values.contactEmail;
				this.borrowingForm.reset();
				return;
			}
		}
		
		values.id = this.lastIndex++;
		this.borrowings.push(values);
		this.borrowingForm.reset();
	}

	deleteUser(index: number): void {
		this.borrowings.splice(index, 1);
	}
	
	editUser(index: number): void {
		this.borrowingForm.setValue(this.borrowings[index]);
	}

}
