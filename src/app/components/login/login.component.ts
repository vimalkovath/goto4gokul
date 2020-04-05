import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserapiService } from '../../service/userapi.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  isMobile: boolean;
  userforms: FormGroup;
  error: any;
  messageSuccess: boolean;
  constructor(private services: UserapiService, private toastr: ToastrManager,
              private formbuilder: FormBuilder, private deviceService: DeviceDetectorService, private router: Router) {
    this.ismobile();
  }
  ngOnInit() {
    this.userforms = this.formbuilder.group({
      email: ['', Validators.email],
      password: ['', Validators.required]
    });
  }
  ismobile() {
    this.isMobile = this.deviceService.isMobile();
  }
  gotocreatepage() {
    this.router.navigate(['create']);
  }
  login() {
    this.services.login(this.userforms.value).subscribe(result => {
      if (this.isMobile) {
        location.href = '/forms';
      }
      this.userforms.reset();
    },
      err => {
        this.error = err.error;
        console.log(this.error);
        this.toastr.errorToastr(this.error.message, 'Warning', {
          position: 'bottom-left'
        });
      });
  }
}
