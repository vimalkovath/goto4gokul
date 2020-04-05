import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { CycleformService } from '../../service/cycleform.service';
import { DeviceDetectorService } from 'ngx-device-detector';
import { ToastrManager } from 'ng6-toastr-notifications';
import { UserapiService } from '../../service/userapi.service';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.scss']
})
export class FormsComponent implements OnInit {
  userdetails: any;
  arraydata: any = [];
  userdatas: any;
  finaldatas: any;
  userforms: FormGroup;
  error: any;
  public isMobilevar = false;
  email: any;
  status = true;
  public packagedetails = [{
    id: 1,
    packagename: 'Weeklsubscription',
    price: 800
  },
  {
    id: 2,
    packagename: 'Dailysubscription',
    price: 100
  },
  {
    id: 3,
    packagename: 'Hourlysubscription',
    price: 50
  }
  ];
  arraydetails: any = [];
  selectedpackage: any;
  constructor(private userapi: UserapiService, private formbuilder: FormBuilder, private services: CycleformService, private router: Router,
              private deviceService: DeviceDetectorService,
  ) {
    this.isMobile();
  }

  ngOnInit(): void {
    this.userdetails = localStorage.getItem('currentUser');
    this.arraydata.push(JSON.parse(this.userdetails));
    this.arraydata.forEach(element => {
      console.log(element.email);
      this.email = element.email;
    });
    this.userforms = this.formbuilder.group({
      pan: ['', Validators.required],
      charger: ['', Validators.required],
      package: ['', Validators.required],
      email: [this.email],
    });
    console.log(this.email);
  }
  public isMobile() {
    this.isMobilevar = this.deviceService.isMobile();
  }
  logout() {
    this.userapi.logout();
    this.router.navigateByUrl('/');
  }
  booknow() {
    this.services.addmoredetails(this.userforms.value).subscribe(result => {
      this.userforms.reset();
      this.router.navigateByUrl('/tickpage');
    },
      err => {
        this.error = err.error;
        console.log(this.error);
      });
  }
  onselecpackage(event) {
    if (event.target.value) {
      this.packagedetails.forEach(element => {
        if (event.target.value === element.packagename) {
          this.selectedpackage = 'hello you chosen' + ' ' +  element.packagename + 'Plan cost is RS.' + ' ' +  element.price;
        }
      });
    }
  }
}
