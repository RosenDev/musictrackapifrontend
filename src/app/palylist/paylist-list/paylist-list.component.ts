import { Component, OnInit, ViewChild } from '@angular/core';
import { PlaylistsService } from '../../service/playlists.service';
import { Paging } from '../../model/paging.model';
import { PlaylistViewModel } from './playlist-view.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ClrDatagridPagination } from '@clr/angular';

@Component({
  selector: 'app-paylist-list',
  templateUrl: './paylist-list.component.html',
})
export class PlaylistListComponent implements OnInit {
  public playlists: PlaylistViewModel[] = [];
  constructor(
    private playlistsService: PlaylistsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paging = <Paging>{ page: 1, size: 1000 };
    this.playlistsService.searchEntites([], paging).subscribe(response => {
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
          this.router.navigate([''], { relativeTo: this.route });
        });
    });
  }

  public editPlaylist(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  public createPlaylist() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
