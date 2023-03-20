import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'app/common/model/book.model';
import { Borrowing } from 'app/common/model/borrowing.model';
import { User } from 'app/common/model/user.model';

@Component({
  selector: 'app-borrowing-form',
  templateUrl: './borrowing-form.component.html',
  styleUrls: ['./borrowing-form.component.css']
})
export class BorrowingFormComponent {

	borrowingForm: FormGroup;

	@Input()
	set borrowingData(borrowing: Borrowing | undefined) {
		if (borrowing) {
			this.borrowingForm.setValue(borrowing);
		}
	}
	
	@Input()
	users?: User[];
	
	@Input()
	books?: Book[];
	
	@Output()
	formCancel = new EventEmitter<void>();

	@Output()
	formCreate = new EventEmitter<Borrowing>();

	@Output()
	formUpdate = new EventEmitter<Borrowing>();

  	constructor() {
	    this.borrowingForm = new FormGroup({
	      	id: new FormControl(null),
			book: new FormControl(null, [Validators.required]),
			user: new FormControl(null, [Validators.required]),
			dateOfBorrowing: new FormControl(Date())
		});
		this.users = [];
  	}

	saveBorrowing(): void {
		if (this.borrowingForm.valid) {
      		if (this.borrowingForm.controls['id'].value) {
        		this.formUpdate.emit(this.prepareBorrowing(this.borrowingForm.controls['id'].value));
      		} else {
        		this.formCreate.emit(this.prepareBorrowing());
     	 	}
    	}
	}

  	private prepareBorrowing(borrowingId?: number): any {
    	return {
      		id: borrowingId != undefined ? borrowingId : Date.now(),
	      	bookId: this.borrowingForm.controls['book'].value,
	      	customerId: this.borrowingForm.controls['user'].value,
			dateOfBorrowing: this.borrowingForm.controls['dateOfBorrowing'].value
    	}
  	}
}
