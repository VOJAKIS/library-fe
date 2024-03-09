import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, tap } from 'rxjs';
import { Auth } from '../auth.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

	private apiUrl = 'http://localhost:8080/api/token';

	constructor(private http: HttpClient) {}

	login(user: Auth): Observable<any> {
		const headers = new HttpHeaders({
			'Content-Type': 'application/json',
			'Authorization': 'Basic ' + btoa(user.username +':'+ user.password)
		});
		
		return this.http.post<any>(this.apiUrl, null, {headers, observe: 'response'})
			.pipe(tap((response: any) => this.setToken(response.headers.get("Authorization"))));
	}

	setToken(token: string) {
		localStorage.setItem('token', token);
	}

	getToken(): string | null {
		return localStorage.getItem('token');
	}

	logout(): Observable<any> {
		return this.http.delete(this.apiUrl, {});
	}
}
