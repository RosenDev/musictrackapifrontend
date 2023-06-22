/**
 * @fileOverview Album Edit Component
 * 
 * This component represents the functionality for creating or updating an album.
 * It includes a form for inputting album details such as name, publishing year, track IDs, and duration.
 * The component communicates with the AlbumsService to perform CRUD operations on albums.
 */

import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreateAlbumModel } from 'src/app/model/create-album.model';
import { UpdateAlbumModel } from 'src/app/model/update-album.model';
import { AlbumsService } from 'src/app/service/albums.service';

/**
 * Represents the Album Edit Component.
 */
@Component({
  selector: 'app-album-edit',
  templateUrl: './album-edit.component.html',
})
export class AlbumEditComponent implements OnInit {
  /**
   * The title displayed in the component.
   */
  public title = '';

  /**
   * The ID of the album being edited.
   */
  private albumId = 0;

  /**
   * The form for album details.
   */
  public albumForm: FormGroup;

  /**
   * Constructs the AlbumEditComponent.
   * 
   * @param formBuilder - FormBuilder for creating the albumForm FormGroup.
   * @param albumsService - Service for performing CRUD operations on albums.
   * @param router - Router for navigation.
   * @param route - ActivatedRoute for retrieving route parameters.
   */
  constructor(
    private formBuilder: FormBuilder,
    private albumsService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Create the albumForm FormGroup with form controls for album details
    this.albumForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      publishingYear: new FormControl('', [Validators.required]),
      trackIds: new FormControl('', [Validators.required]),
      duration: new FormControl('', [Validators.required]),
    });
  }

  /**
   * Initializes the component.
   * Retrieves the album ID from the route parameters and loads album data if editing an existing album.
   */
  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      if (x.has('id')) {
        this.title = 'Update Album';
        this.albumId = Number(x.get('id'));
        this.albumsService.getEntityById(this.albumId).subscribe(x => {
          this.albumForm.patchValue(x.result);
        });
      } else {
        this.title = 'Create Album';
      }
    });
  }

  /**
   * Handles the form submission.
   * If the form is invalid, the submission is aborted.
   * If the album ID is not set, a new album is created.
   * Otherwise, an existing album is updated.
   */
  public submit() {
    if (this.albumForm.invalid) {
      return;
    }

    if (!this.albumId) {
      // Create a new album
      const albumModel = <CreateAlbumModel>(
        Object.assign({}, this.albumForm.value)
      );
      albumModel.trackIds = this.albumForm.value.trackIds.split(', ');
      this.albumsService.createAlbum(albumModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['albums']);
        }
      });
    } else {
      // Update an existing album
      const albumModel = <UpdateAlbumModel>(
        Object.assign({}, { ...this.albumForm.value, id: this.albumId })
      );
      albumModel.trackIds = this.albumForm.value.trackIds.split(', ');
      this.albumsService.updateAlbum(albumModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['albums']);
        }
      });
    }
  }
}
