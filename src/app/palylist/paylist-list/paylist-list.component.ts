import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../service/playlists.service';
import { Paging } from '../../model/paging.model';
import { PlaylistViewModel } from './playlist-view.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-paylist-list',
  templateUrl: './paylist-list.component.html',
})
export class PlaylistListComponent implements OnInit {
  private paging: Paging = { page: 1, size: 100 };
  public playlists: PlaylistViewModel[] = [];

  constructor(
    private playlistsService: PlaylistsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.playlistsService.searchEntites([], this.paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.playlists = [...response.result].map(
        x =>
          <PlaylistViewModel>{
            id: x.id,
            name: x.name,
            duration: x.duration,
            isPublic: x.isPublic,
            album: x.album.name,
            tracks: x.tracks.map(
              x => `name: ${x.track.name} position: ${x.trackPosition}`
            ),
          }
      );
    });
  }
  public deletePlaylist(id: number) {
    this.playlistsService.deleteEntity(id).subscribe(() => {
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['playlists'], {
            queryParams: { page: 1, size: 100 },
          });
        });
    });
  }

  public editPlaylist(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }
}
