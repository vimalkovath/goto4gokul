import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from './users';
import { Moredetails } from './users';

@Injectable({
  providedIn: 'root'
})
export class CycleformService {
  private BaseUrl1 = `/log`;

  constructor(private http: HttpClient) { }
  getuserdetails() {
    return this.http.get(this.BaseUrl1 + '/getbookingdetails');
  }
  addmoredetails(moredetails: Moredetails) {
    return this.http.post(this.BaseUrl1 + '/bookingdetails', moredetails);
  }
  getuserinfo() {
    return this.http.get(this.BaseUrl1 + '/getbookingdetails');

  }
  edituserinfo(id) {
    return this.http.get(this.BaseUrl1 + '/edit/' + id);
  }
  deleteBusiness(id) {
    return this.http.get(this.BaseUrl1 + '/delete', id);
  }
  updateuser(users: User, id) {
    this
      .http
      .post(this.BaseUrl1 + '/update/' + id, users)
      .subscribe(res => console.log('Done', users));
  }
}

