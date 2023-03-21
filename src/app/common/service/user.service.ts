import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse } from 'app/common/model/user.model';
import { Pagination } from '../model/pagination.model';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://localhost:8080/api/customers';

  getUsers(pagination: Pagination = {page:0, size:10, filter: {lastName: ''}}): Observable<UserResponse> {
    const params = new HttpParams().appendAll({
      lastName: pagination.filter.lastName,
      page: pagination.size,
      size: pagination.size
    });

    return this.http.get<UserResponse>(this.url, {params});
  }

  getUser(userId: number): Observable<User> {
    return this.http.get<User>(`${this.url}/${userId}`);
  }

  createUser(user: User): Observable<number> {
    return this.http.post<number>(this.url, user);
  }

  updateUser(user: User): Observable<User> {
    return this.http.put<User>(`${this.url}/${user.id}`, user);
  }

  deleteUser(userId: number): Observable<void> {
    return this.http.delete<void>(`${this.url}/${userId}`);
  }

  constructor(private http: HttpClient) {}
}
