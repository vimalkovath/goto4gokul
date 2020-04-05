import { Component, OnInit } from '@angular/core';
import { UserapiService } from '../../service/userapi.service';
import { Router, ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-tickpage',
  templateUrl: './tickpage.component.html',
  styleUrls: ['./tickpage.component.scss']
})
export class TickpageComponent implements OnInit {

  constructor(private userapi: UserapiService, private router: Router) {
  }
  ngOnInit(): void {
  }
  logout() {
    this.userapi.logout();
    this.router.navigateByUrl('/');
  }
}
