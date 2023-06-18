import { Component, OnInit } from '@angular/core';
import {
  FormGroup,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { CreatePlaylistModel } from 'src/app/model/create-playlist.model';
import { UpdatePlaylistModel } from 'src/app/model/update-playlist.model';
import { PlaylistsService } from 'src/app/service/playlists.service';

@Component({
  selector: 'app-playlist-edit',
  templateUrl: './playlist-edit.component.html',
})
export class PlaylistEditComponent implements OnInit {
  public title = '';
  private playlistId = 0;
  public playlistForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private playlistsService: PlaylistsService,
    private router: Router,
    private route: ActivatedRoute
  ) {
    this.playlistForm = this.formBuilder.group({
      name: new FormControl('', [Validators.required]),
      isPublic: new FormControl(false, [Validators.required]),
      trackIds: new FormControl('', [Validators.required]),
      albumId: new FormControl('', [Validators.required]),
    });
  }
  public ngOnInit(): void {
    this.route.paramMap.subscribe(x => {
      if (x.has('id')) {
        this.title = 'Update Playlist';
        this.playlistId = Number(x.get('id'));
        this.playlistsService.getEntityById(this.playlistId).subscribe(x => {
          this.playlistForm.patchValue(x.result);
        });
      } else {
        this.title = 'Create Playlist';
      }
    });
  }

  public submit() {
    if (this.playlistForm.invalid) {
      return;
    }

    if (!this.playlistId) {
      const playlistModel = <CreatePlaylistModel>(
        Object.assign({}, this.playlistForm.value)
      );
      playlistModel.tracksIds = this.playlistForm.value.trackIds
        .split(', ')
        .map(Number);
      this.playlistsService.createPlaylist(playlistModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['playlists']);
        }
      });
    } else {
      const playlistModel = <UpdatePlaylistModel>(
        Object.assign({}, { ...this.playlistForm.value, id: this.playlistId })
      );
      playlistModel.tracksIds = this.playlistForm.value.trackIds.split(', ');
      this.playlistsService.updatePlaylist(playlistModel).subscribe(success => {
        if (success.result) {
          this.router.navigate(['playlists']);
        }
      });
    }
  }
}
