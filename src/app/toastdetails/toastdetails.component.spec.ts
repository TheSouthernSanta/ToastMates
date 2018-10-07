import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastdetailsComponent } from './toastdetails.component';

describe('ToastdetailsComponent', () => {
  let component: ToastdetailsComponent;
  let fixture: ComponentFixture<ToastdetailsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastdetailsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastdetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
