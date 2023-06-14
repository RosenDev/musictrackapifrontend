import { Component, OnInit } from '@angular/core';
import { PlaylistsService } from '../../service/playlists.service';
import { Paging } from '../../model/paging.model';
import { ActivatedRoute } from '@angular/router';
import { PlaylistViewModel } from './playlist-view.model';

@Component({
  selector: 'app-paylist-list',
  templateUrl: './paylist-list.component.html',
})
export class PlaylistListComponent implements OnInit {
  private paging: Paging = { page: 1, size: 100 };
  public playlists: PlaylistViewModel[] = [];

  constructor(
    private playlistsService: PlaylistsService,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.route.queryParamMap.subscribe(x => {
      if (x.get('page')) {
        this.paging.page = Number(x.get('page'));
      }

      if (x.get('size')) {
        this.paging.size = Number(x.get('size'));
      }
    });

    this.playlistsService.searchEntites([], this.paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.playlists = [...response.result].map(
        x =>
          <PlaylistViewModel>{
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
}
