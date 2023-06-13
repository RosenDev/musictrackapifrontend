import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlbumModel } from 'src/app/model/album.model';
import { FieldFilter } from 'src/app/model/field-filter.model';
import { FieldValueType } from 'src/app/model/field-value-type.model';
import { Paging } from 'src/app/model/paging.model';
import { AlbumsService } from 'src/app/service/albums.service';

@Component({
  selector: 'app-album-list',
  templateUrl: './album-list.component.html',
  styleUrls: ['./album-list.component.css'],
})
export class AlbumListComponent implements OnInit {
  private paging: Paging = { page: 1, size: 100 };
  public albums: AlbumModel[] = [];
 
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

    const filters: FieldFilter[] = [
      {
        field: 'name',
        type: FieldValueType.Text,
        value: 'test',
      },
    ];

    this.albumsService
      .searchEntites(filters, this.paging)
      .subscribe(response => {
        if (!response) {
          return;
        }

        this.albums = [...response.result];
      });
  }
}
