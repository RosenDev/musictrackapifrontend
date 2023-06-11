import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PaylistListComponent } from './paylist-list.component';

describe('PaylistListComponent', () => {
  let component: PaylistListComponent;
  let fixture: ComponentFixture<PaylistListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [PaylistListComponent]
    });
    fixture = TestBed.createComponent(PaylistListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
