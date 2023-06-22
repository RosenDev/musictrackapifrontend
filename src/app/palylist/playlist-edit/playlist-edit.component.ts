/**
 * Represents the Playlist Edit component.
 */
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, FormControl, Validators } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatePlaylistModel } from 'src/app/model/create-playlist.model';
import { UpdatePlaylistModel } from 'src/app/model/update-playlist.model';
import { PlaylistsService } from 'src/app/service/playlists.service';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
})
export class PlaylistEditComponent implements OnInit {
  /**
   * Holds the title of the playlist.
   */
  public title = '';

  /**
   * Holds the ID of the playlist.
   */
  private playlistId = 0;

  /**
   * Represents the playlist form group.
   */
  public playlistForm: FormGroup;

  /**
   * Constructs an instance of PlaylistEditComponent.
   *
   * @param formBuilder - FormBuilder for creating the playlistForm.
   * @param playlistsService - PlaylistsService for managing playlists.
   * @param router - Router for navigation.
   * @param route - ActivatedRoute for retrieving route parameters.
   */
  constructor(
    private formBuilder: FormBuilder,
    private playlistsService: PlaylistsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    // Initialize the playlistForm with form controls and validators
    this.playlistForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      isPublic: new FormControl(false, [Validators.required]),
      trackIds: new FormControl('', [Validators.required]),
      albumId: new FormControl('', [Validators.required]),
    });
  }

  /**
   * Lifecycle hook called on component initialization.
   */
  public ngOnInit(): void {
    // Subscribe to the route paramMap to retrieve the playlist ID
    this.route.paramMap.subscribe(x => {
      if (x.has('id')) {
        this.title = 'Update Playlist';
        this.playlistId = Number(x.get('id'));
        // Fetch the playlist data by ID and patch the form with the retrieved values
        this.playlistsService.getEntityById(this.playlistId).subscribe(x => {
          this.playlistForm.patchValue(x.result);
        });
      } else {
        this.title = 'Create Playlist';
      }
    });
  }

  /**
   * Handles the form submission.
   */
  public submit(): void {
    // Check if the form is invalid
    if (this.playlistForm.invalid) {
      return;
    }

    if (!this.playlistId) {
      // Create a new playlist
      const playlistModel = <CreatePlaylistModel>(
        Object.assign({}, this.playlistForm.value)
      );
      playlistModel.trackIds = this.playlistForm.value.trackIds
        .split(', ')
        .map(Number);
      this.playlistsService.createPlaylist(playlistModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['playlists']);
        }
      });
    } else {
      // Update an existing playlist
      const playlistModel = <UpdatePlaylistModel>(
        Object.assign({}, { ...this.playlistForm.value, id: this.playlistId })
      );
      playlistModel.trackIds = this.playlistForm.value.trackIds.split(', ');
      this.playlistsService.updatePlaylist(playlistModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['playlists']);
        }
      });
    }
  }
}
