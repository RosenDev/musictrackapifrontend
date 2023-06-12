import { Component, OnInit } from '@angular/core';
import { PlaylistModel } from '../../model/playlist.model';
import { PlaylistsService } from '../../service/playlists.service';
import { FieldFilter } from '../../model/field-filter.model';
import { FieldValueType } from '../../model/field-value-type.model';
import { Paging } from '../../model/paging.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-paylist-list',
  templateUrl: './paylist-list.component.html'
})
export class PaylistListComponent implements OnInit {
  public playlists: PlaylistModel[] = [];
  public displayedColumns = ["name", "duration", "isPublic", "tracks", "album"];

  constructor(private playlistsService: PlaylistsService, private usersService: UsersService) {
  }

  ngOnInit(): void {
    const filters: FieldFilter[] = [
      {
        field: "name",
        type: FieldValueType.Text,
        value: "test"
      }
    ]

    const paging: Paging = { page: 1, size: 100 };
    
    this.playlistsService.searchEntites(filters, paging)
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.playlists = [...response.result];
      })
  }
}
