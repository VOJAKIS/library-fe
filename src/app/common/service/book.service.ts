import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Book } from 'app/common/model/book.model';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  private url = 'http://localhost:8080/api/books';

  getBooks(): Observable<Book[]> {
    return this.http.get<Book[]>(this.url);
  }

  getBook(bookId: number): Observable<Book> {
    return this.http.get<Book>(`${this.url}/${bookId}`);
  }

  createBook(book: Book): Observable<number> {
    return this.http.post<number>(this.url, book);
  }

  updateBook(book: Book): Observable<Book> {
    return this.http.put<Book>(`${this.url}/${book.id}`, book);
  }

  deleteBook(bookId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${bookId}`);
  }

  constructor(private http: HttpClient) { }
}
