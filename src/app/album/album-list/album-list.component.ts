import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Paging } from 'src/app/model/paging.model';
import { AlbumsService } from 'src/app/service/albums.service';
import { AlbumViewModel } from './album-view.model';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent implements OnInit {
  private paging: Paging = { page: 1, size: 100 };
  public albums: AlbumViewModel[] = [];

  constructor(
    private albumsService: AlbumsService,
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

    this.albumsService.searchEntites([], this.paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.albums = [...response.result].map(
        x =>
          <AlbumViewModel>{
            name: x.name,
            publishingYear: x.publishingYear,
            tracks: x.tracks.map(x => x.name),
            duration: x.duration,
          }
      );
    });
  }

  public formatTracks(tracks: string[]): string{
    return tracks.join(', ');
  }
}
