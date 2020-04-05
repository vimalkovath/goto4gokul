import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { UserapiService } from '../../service/userapi.service';
import { ToastrManager } from 'ng6-toastr-notifications';
import { Router } from '@angular/router';

@Component({
  selector: 'app-createaccount',
  templateUrl: './createaccount.component.html',
  styleUrls: ['./createaccount.component.scss']
})
export class CreateaccountComponent implements OnInit {
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
      password: ['', Validators.required],
      name: ['', Validators.required],
      mobilenumber: ['', Validators.required]
    });
  }
  ismobile() {
    this.isMobile = this.deviceService.isMobile();
  }
  createaccount() {
    this.services.cerateaccount(this.userforms.value).subscribe(result => {
      if (this.isMobile) {
        this.toastr.infoToastr('Howdy' + ' ' + this.userforms.value.name + ' ' + 'you successfully registered', 'Howdy', {
          position: 'bottom-left',
        });
      }
      // this.userforms.reset();
      this.router.navigateByUrl('');
    },
      err => {
        this.error = err.error;
        this.toastr.errorToastr(this.error.message, 'Warning', {
          position: 'bottom-left'
        });
      });
  }
}
