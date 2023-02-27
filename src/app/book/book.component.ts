import { Component } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  bookForm: FormGroup;
  formSelectedControlName = 'Pridať novú knihu';

  constructor() {
    this.bookForm = new FormGroup({
      id: new FormControl(),
      name: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      author: new FormControl(null, [Validators.required, Validators.minLength(3)]),
      availability: new FormControl()
    });
  }

  books: Array<{
    id: number,
    name: string,
    author: string,
    availability: boolean
  }> = [];

  addBook() : void {
    this.formSelectedControlName = 'Pridať novú knihu';
    if (this.bookForm.controls['id'].value) {
      const index = this.books.findIndex(person => person['id'] === this.bookForm.controls['id'].value);
      if (index !== -1) { this.books[index] = this.bookForm.value; }
    } else {
      this.books.push({
        id: Date.now(),
        name: this.bookForm.controls['name'].value,
        author: this.bookForm.controls['author'].value,
        availability: this.bookForm.controls['availability'].value
      });
    }
    this.bookForm.reset();
  }

  editBook(index: number): void {
    this.formSelectedControlName = 'Úprava žánru #' + this.books[index].id;
    this.bookForm.setValue(this.books[index]);
  }

  deleteBook(index: number): void {
    this.books.splice(index, 1);
  }

}
