import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RecenttoastComponent } from './recenttoast.component';

describe('RecenttoastComponent', () => {
  let component: RecenttoastComponent;
  let fixture: ComponentFixture<RecenttoastComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RecenttoastComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RecenttoastComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
