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
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      author: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      availability: new FormControl()
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
    return {
      id: id !== undefined ? id : Date.now(),
      name: this.bookForm.controls.name.value,
      author: this.bookForm.controls.author.value,
      availability: this.bookForm.controls.availability.value,
    }
  }

}
