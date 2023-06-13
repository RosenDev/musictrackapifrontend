import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FieldFilter } from 'src/app/model/field-filter.model';
import { FieldValueType } from 'src/app/model/field-value-type.model';
import { Paging } from 'src/app/model/paging.model';
import { TrackModel } from 'src/app/model/track.model';
import { TracksService } from 'src/app/service/tracks.service';

@Component({
  selector: 'app-track-list',
  templateUrl: './track-list.component.html',
  styleUrls: ['./track-list.component.css'],
})
export class TrackListComponent implements OnInit {
  private paging: Paging = { page: 1, size: 100 };

  public tracks: TrackModel[] = [];
  
  constructor(
    private tracksService: TracksService,
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

    const filters: FieldFilter[] = [
      {
        field: 'name',
        type: FieldValueType.Text,
        value: 'test',
      },
    ];

    this.tracksService
      .searchEntites(filters, this.paging)
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.tracks = [...response.result];
      });
  }
}
