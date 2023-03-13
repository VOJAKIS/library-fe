import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { Borrowing } from '../model/borrowing.model';

@Injectable({
  providedIn: 'root'
})
export class BorrowingService {

	private url = 'http://localhost:8080/api/borrowings';

  	constructor(private http: HttpClient) {}

	getBorrowings(): Observable<Borrowing[]> {
		return this.http.get<Borrowing[]>(this.url);
	}

	getBorrowing(borrowingId: number): Observable<Borrowing> {
		return this.http.get<Borrowing>(`${this.url}/${borrowingId}`);
	}

	createBorrowing(borrowing: Borrowing): Observable<number> {
		return this.http.post<number>(this.url, borrowing);
	}

	updateBorrowing(borrowing: Borrowing): Observable<Borrowing> {
		return this.http.put<Borrowing>(`${this.url}/${borrowing.id}`, borrowing);
	}

	deleteBorrowing(borrowingId: number): Observable<void> {
		return this.http.delete<void>(`${this.url}/${borrowingId}`);
	}
}
