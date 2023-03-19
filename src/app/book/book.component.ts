import { Component } from '@angular/core';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import { Book } from 'app/common/model/book.model';
import { BookService } from '../common/service/book.service';
import { OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';
import { ToastService } from 'angular-toastify';
import { Router } from '@angular/router';

@UntilDestroy()
@Component({
  selector: 'app-book',
  templateUrl: './book.component.html',
  styleUrls: ['./book.component.css']
})
export class BookComponent implements OnDestroy {

  private getListSubscription?: Subscription;

  constructor(private service: BookService, private toastService: ToastService, private router: Router) {
    this.getBooks();
  }

  books: Array<Book> = [];
  book?: Book; 

  getBooks() : void {
    this.getListUnsubscribe();
    this.getListSubscription = this.service.getBooks().pipe(untilDestroyed(this)).subscribe((books : Book[]) => {
		  this.books = books;
	  });
  }

  selectBookToUpdate(bookId: number): void {
    this.router.navigate(['book', bookId]);
    // this.service.getBook(bookId).pipe(untilDestroyed(this)).subscribe((book : Book) => {
		// this.book = book
	  // });
  }

  createBook(book : Book) : void {
    this.service.createBook(book).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success('Kniha bola zaevidovaná.');
    })
    this.getBooks();
  }
  
  deleteBook(bookId : number) : void {
    if(window.confirm('Naozaj chcete vymazať túto knihu?')) {
        this.service.deleteBook(bookId).pipe(untilDestroyed(this)).subscribe(() => {
        this.toastService.success('Kniha bola vymazaná.');
        this.getBooks();
      }, () => {
        this.toastService.error('Knihu nebolo možné zmazať.');
      });
    }
  }

  ngOnDestroy(): void {
      this.getListUnsubscribe();
  }

  getListUnsubscribe(): void {
    if(this.getListSubscription) {
      this.getListSubscription.unsubscribe();
      this.getListSubscription = undefined;
    }
  }
}
