import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastlistComponent } from './toastlist.component';

describe('ToastlistComponent', () => {
  let component: ToastlistComponent;
  let fixture: ComponentFixture<ToastlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
