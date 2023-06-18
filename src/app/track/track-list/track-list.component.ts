import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Paging } from 'src/app/model/paging.model';
import { TrackModel } from 'src/app/model/track.model';
import { TracksService } from 'src/app/service/tracks.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
})
export class TrackListComponent implements OnInit {
  private _pageNumber = 0;

  public get pageNumber(): number {
    return this._pageNumber;
  }

  public set pageNumber(value: number) {
    const paging = <Paging>{ page: this._pageNumber, size: 100 };
    this.searchTracks(paging);
  }

  public tracks: TrackModel[] = [];

  constructor(
    private tracksService: TracksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    this.route.queryParamMap.subscribe(x => {
      this._pageNumber = Number(x.get('page'));
    });
    const paging = <Paging>{ page: this.pageNumber, size: 100 };
    this.tracksService.searchEntites([], paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.tracks = [...response.result];
    });
  }

  private searchTracks(paging: Paging) {
    this.router.navigate([''], {
      relativeTo: this.route,
      queryParams: { page: paging.page, size: paging.size },
    });
  }

  public deleteTrack(id: number) {
    this.tracksService.deleteEntity(id).subscribe(() => {
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate(['tracks'], {
            queryParams: { page: this.pageNumber, size: 100 },
          });
        });
    });
  }

  public editTrack(id: number) {
    this.router.navigate(['edit', id], { relativeTo: this.route });
  }
  public addTrack() {
    this.router.navigate(['create'], { relativeTo: this.route });
  }
}
