import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PlaylistEditComponent } from './playlist-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from '@clr/angular';
import { ServiceModule } from 'src/app/service/service.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('PlaylistEditComponent', () => {
  let component: PlaylistEditComponent;
  let fixture: ComponentFixture<PlaylistEditComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ClarityModule,
        ServiceModule,
        RouterTestingModule,
        FormsModule,
        ReactiveFormsModule
      ],
      declarations: [PlaylistEditComponent],
    });
    fixture = TestBed.createComponent(PlaylistEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
