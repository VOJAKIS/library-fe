import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Book } from 'app/common/model/book.model';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.css']
})
export class BookFormComponent {

  bookForm: FormGroup;
  formSelectedControlName = 'Pridať novú knihu';

  @Input()
  set bookData(book : Book | undefined) {
    if(book) {
      this.bookForm.setValue(book);
    }
  }

  @Output()
  formCreate = new EventEmitter<Book>();

  @Output()
  formUpdate = new EventEmitter<Book>();


  constructor() {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      title: new FormControl('Flowers for Algernon', [Validators.required, Validators.minLength(3)]),
      authorFirstName: new FormControl('Daniel', [Validators.required, Validators.minLength(3)]),
      authorLastName: new FormControl('Keyes', [Validators.required, Validators.minLength(3)]),
	    categories: new FormControl('204', [Validators.required]),
      isbn: new FormControl('987-2-35-566563-10-0', [Validators.required]),
      bookCount: new FormControl(289, [Validators.required])
      // availability: new FormControl()
    });
  }

  createBook(): void {
    if(this.bookForm.valid) {
      if(this.bookForm.controls.id.value) {
        this.formUpdate.emit(this.prepareBook(this.bookForm.controls.id.value));
      } else {
        this.formCreate.emit(this.prepareBook());
      }
      this.bookForm.reset();
    }
  }

  private prepareBook(id? : number) : Book {
	let categories = this.bookForm.controls.categories.value.split(' ').map((categoryId: string) => {
		return Number(categoryId);
	});
    return {
      id: id !== undefined ? id : Date.now(),
      title: this.bookForm.controls.title.value,
      authorFirstName: this.bookForm.controls.authorFirstName.value,
      authorLastName: this.bookForm.controls.authorLastName.value,
	    categories: categories,
      isbn: this.bookForm.controls.isbn.value,
      bookCount: this.bookForm.controls.bookCount.value
      //TODO: Remove -> availability: this.bookForm.controls.availability.value,
    };
  }

}
