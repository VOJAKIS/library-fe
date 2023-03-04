import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
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
			id: new FormControl(null, [Validators.required]),
			book: new FormControl(null, [Validators.required]),
			user: new FormControl(null, [Validators.required]),
		})
  }

  saveBorrowing(): void {
		let values = this.borrowingForm.value;
		
		for (let i = 0; i<this.borrowings.length; i++) {
			if (this.borrowingForm.value.id == this.borrowings[i].id) {
				this.borrowings[i].book = values.book;
				this.borrowings[i].user = values.user;
				this.borrowingForm.reset();
				return;
			}
		}
		
		values.id = this.lastIndex++;
		this.borrowings.push(values);
		this.borrowingForm.reset();
	}

	deleteBorrowing(index: number): void {
		this.borrowings.splice(index, 1);
	}
	
	editBorrowing(index: number): void {
		this.borrowingForm.setValue(this.borrowings[index]);
	}

}
