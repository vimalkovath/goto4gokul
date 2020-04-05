import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TickpageComponent } from './tickpage.component';

describe('TickpageComponent', () => {
  let component: TickpageComponent;
  let fixture: ComponentFixture<TickpageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TickpageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TickpageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
