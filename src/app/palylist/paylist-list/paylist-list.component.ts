import { Component, OnInit } from '@angular/core';
import { PlaylistModel } from '../../model/playlist.model';
import { PlaylistsService } from '../../service/playlists.service';
import { FieldFilter } from '../../model/field-filter.model';
import { FieldValueType } from '../../model/field-value-type.model';
import { Paging } from '../../model/paging.model';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-paylist-list',
  templateUrl: './paylist-list.component.html',
})
export class PlaylistListComponent implements OnInit {
  private paging: Paging = { page: 1, size: 100 };
  public playlists: PlaylistModel[] = [];

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

    const filters: FieldFilter[] = [
      {
        field: 'name',
        type: FieldValueType.Text,
        value: 'test',
      },
    ];

    this.playlistsService.searchEntites(filters, this.paging).subscribe(response => {
      if (!response) {
        return;
      }

      this.playlists = [...response.result];
    });
  }
}
