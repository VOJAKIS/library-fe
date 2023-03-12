import { Component } from '@angular/core';
import { Book } from 'app/common/model/book.model';
import { BookService } from '../common/model/service/book.service';

@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent {

  constructor(private service : BookService) {
    this.getBooks();
  }

  books: Array<Book> = [];
  book?: Book; 

  getBooks() : void {
    this.service.getBooks().subscribe((books : Book[]) => { this.books = books });
  }

  selectBookToUpdate(bookId: number): void {
    this.service.getBook(bookId).subscribe((book : Book) => { this.book = book });
  }

  createBook(book : Book) : void {
    this.service.createBook(book).subscribe(() => {
      console.log('Kniha bola zaevidovaná.');
      this.getBooks();
    })
  }

  updateBook(book : Book) : void {
    this.service.updateBook(book).subscribe(() => {
      console.log('Kniha bola upravená.');
      this.getBooks();
    })
  }
  
  deleteBook(bookId : number) : void {
    this.service.deleteBook(bookId).subscribe(() => {
      console.log('Kniha bola vymazaná.');
      this.getBooks();
    })
  }


}
