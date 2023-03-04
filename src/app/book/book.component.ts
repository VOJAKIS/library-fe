import { Component } from '@angular/core';
import { Book } from 'app/model/book.model';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {


  books: Array<Book> = [];
  book?: Book; 

  createBook(book : Book) : void {
    this.books.push(book);
  }

  updateBook(book : Book) : void {
    const index = this.books.findIndex(book => book.id === book.id);
    if(index !== -1) {
      this.books[index] = book;
      this.book = undefined;
    }
  }
  
  selectBookToUpdate(bookId : number) : void {
    this.book = this.books.find(book => book.id === bookId);
  }

  deleteBook(bookId : number) : void {
    const index = this.books.findIndex(book => book.id === bookId);
    if(index !== -1) {
      this.books.splice(index, 1);
    }
  }


}
