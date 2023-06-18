import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackEditComponent } from './track-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from '@clr/angular';
import { ServiceModule } from 'src/app/service/service.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('TrackEditComponent', () => {
  let component: TrackEditComponent;
  let fixture: ComponentFixture<TrackEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ClarityModule,
        ServiceModule,
        RouterTestingModule,
        ReactiveFormsModule,
        FormsModule,
      ],
      declarations: [TrackEditComponent],
    });
    fixture = TestBed.createComponent(TrackEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
