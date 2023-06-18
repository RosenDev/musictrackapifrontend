import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TrackListComponent } from './track-list.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ClarityModule } from '@clr/angular';
import { ServiceModule } from 'src/app/service/service.module';
import { RouterTestingModule } from '@angular/router/testing';

describe('TrackListComponent', () => {
  let component: TrackListComponent;
  let fixture: ComponentFixture<TrackListComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports:[HttpClientTestingModule, ClarityModule, ServiceModule, RouterTestingModule],
      declarations: [TrackListComponent]
    });
    fixture = TestBed.createComponent(TrackListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
