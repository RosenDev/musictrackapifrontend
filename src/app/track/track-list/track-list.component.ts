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
  public tracks: TrackModel[] = [];

  constructor(
    private tracksService: TracksService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  public ngOnInit(): void {
    const paging = <Paging>{ page: 1, size: 1000 };
    this.tracksService.searchEntites([], paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.tracks = [...response.result];
    });
  }
  public deleteTrack(id: number) {
    this.tracksService.deleteEntity(id).subscribe(() => {
      this.router
        .navigateByUrl('/refresh', { skipLocationChange: true })
        .then(() => {
          this.router.navigate([''], {relativeTo: this.route});
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
