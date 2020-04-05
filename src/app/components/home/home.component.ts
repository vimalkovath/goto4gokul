import { Component, OnInit } from '@angular/core';
import { DeviceDetectorService } from 'ngx-device-detector';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  isMobile: boolean;

  constructor(private deviceService: DeviceDetectorService) {
    this.ismobile();
  }
  ngOnInit(): void {
  }
  ismobile() {
    this.isMobile = this.deviceService.isMobile();

  }
}
