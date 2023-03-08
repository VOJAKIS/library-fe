import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from '../model/user.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private url = 'http://labs.fpv.umb.sk:8080/api/customers/';

  constructor(private http: HttpClient) {}

  getUsers(): Observable<User[]> {
    return this.http.get<User[]>(this.url);
  }

  createUser(user: User): Observable<User[]> {
    return this.http.post<User[]>(this.url, user);
  }

  // TODO: Vložiť sem všetky

}
