import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AlbumEditComponent } from './album-edit.component';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { ClarityModule } from '@clr/angular';
import { ServiceModule } from 'src/app/service/service.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

describe('AlbumEditComponent', () => {
  let component: AlbumEditComponent;
  let fixture: ComponentFixture<AlbumEditComponent>;

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
      declarations: [AlbumEditComponent],
    });
    fixture = TestBed.createComponent(AlbumEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
