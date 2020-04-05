import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  private BaseUrl = `/log`;
  headers = new HttpHeaders().set('Content-Type', 'application/json');

  constructor(private http: HttpClient) { }

  cerateaccount(userdetails: User) {
    return this.http.post(this.BaseUrl + '/signup', userdetails, { headers: this.headers });
  }

  login(userdetails: User) {
    return this.http.post<any>(this.BaseUrl + '/login', userdetails, { headers: this.headers })
      .map(user => {
        if (user) {
          localStorage.setItem('currentUser', JSON.stringify(user));
        }

        return user;
      });
  }

  logout() {
    localStorage.removeItem('currentUser');
  }
}
