import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Borrowing } from 'app/common/model/borrowing.model';

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

  @Output()
  formCreate = new EventEmitter<Borrowing>();

  @Output()
  formUpdate = new EventEmitter<Borrowing>();

  constructor() {
    this.borrowingForm = new FormGroup({
      id: new FormControl(),
			bookId: new FormControl(0, [Validators.required]),
			userId: new FormControl(0, [Validators.required])
		});
  }

  saveBorrowing(): void {
		if (this.borrowingForm.valid) {
      if (this.borrowingForm.controls['id'].value) {
        this.formUpdate.emit(this.prepareBorrowing(this.borrowingForm.controls['id'].value));
      } else {
        this.formCreate.emit(this.prepareBorrowing());
      }
      this.borrowingForm.reset();
    }
	}

  private prepareBorrowing(borrowingId?: number): Borrowing {
    return {
      id: borrowingId != undefined ? borrowingId : Date.now(),
      bookId: this.borrowingForm.controls['bookId'].value,
      userId: this.borrowingForm.controls['userId'].value
    }
  }
}
