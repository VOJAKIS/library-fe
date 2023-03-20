import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ToastService } from 'angular-toastify';
import { Book } from 'app/common/model/book.model';
import { BookService } from 'app/common/service/book.service';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';

@UntilDestroy()
@Component({
  selector: 'app-book-detail',
  templateUrl: './book-detail.component.html',
  styleUrls: ['./book-detail.component.css']
})
export class BookDetailComponent {

  book?: Book;
  private bookId: number | null;

  constructor(private router: Router, private route: ActivatedRoute, private service: BookService, private toastService: ToastService) {
    this.bookId = Number(route.snapshot.paramMap.get('bookId'));
    this.getBook();
  }

  getBook(): void {
    if(this.bookId) {
      this.service.getBook(this.bookId).pipe(untilDestroyed(this)).subscribe((book: Book) => {
        this.book = book;
      });
    }
  }
  
  updateBook(book: Book): void {
    this.service.updateBook(book).pipe(untilDestroyed(this)).subscribe(() => {
      this.toastService.success('Kniha bola upravená.');
    }, () => {
      this.toastService.error('Knihu sa neporadilo upravit.');
    });
  }

  cancel(): void {
    this.router.navigate(['user']);
  }

}
