import { Component, OnInit } from '@angular/core';
import { Paging } from 'src/app/model/paging.model';
import { AlbumsService } from 'src/app/service/albums.service';
import { AlbumViewModel } from './album-view.model';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
})
export class AlbumListComponent implements OnInit {
  public albums: AlbumViewModel[] = [];

  constructor(
    private albumsService: AlbumsService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const paging = <Paging>{ page: 1, size: 1000 };
    this.albumsService.searchEntites([], paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.albums = [...response.result].map(
        x =>
          <AlbumViewModel>{
            id: x.id,
            name: x.name,
            publishingYear: x.publishingYear,
            tracks: x.tracks.map(x => x.name),
            duration: x.duration,
          }
      );
    });
  }

  public formatTracks(tracks: string[]): string {
    return tracks.join(', ');
  }

  public deleteAlbum(id: number) {
    this.albumsService.deleteEntity(id).subscribe(() => {
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate([''], { relativeTo: this.route });
        });
    });
  }

  public editAlbum(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }

  public createAlbum() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
