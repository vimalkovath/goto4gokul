import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import 'rxjs/add/operator/map';
import { User } from './users';

@Injectable({
  providedIn: 'root'
})
export class UserapiService {
  private BaseUrl = `http://localhost:8080/log`;

  constructor(private http: HttpClient) { }

  cerateaccount(userdetails: User) {
    return this.http.post(this.BaseUrl + '/signup', userdetails);
  }

  login(userdetails: User) {
    return this.http.post<any>(this.BaseUrl + '/login', userdetails)
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
