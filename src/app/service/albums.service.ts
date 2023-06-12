import { Injectable } from "@angular/core";
import { ServiceBase } from "./service.base";
import { AlbumModel } from "../model/album.model";
import { HttpClient } from "@angular/common/http";
import { LocalService } from "./local.service";
import { ApiResponse } from "../model/api-response.model";
import { baseUrl } from "../environment";
import { Observable } from "rxjs";
import { UpdateAlbumModel } from "../model/update-album.model";
import { CreateAlbumModel } from "../model/create-album.model";

@Injectable()
export class AlbumsService extends ServiceBase<AlbumModel>{

    constructor(client: HttpClient, localService: LocalService) {
        super("albums", client, localService);
    }
    public createAlbum(
        createAlbumModel: CreateAlbumModel
      ): Observable<ApiResponse<number>> {
        return this.client.post<ApiResponse<number>>(
          `${baseUrl}/${this.serviceUrl}`,
          createAlbumModel,
          {
            headers: this.createHttpHeaders(),
          }
        );
      }
    
      public updateTrack(
        updateAlbumModel: UpdateAlbumModel
      ): Observable<ApiResponse<number>> {
        return this.client.post<ApiResponse<number>>(
          `${baseUrl}/${this.serviceUrl}`,
          updateAlbumModel,
          {
            headers: this.createHttpHeaders(),
          }
        );
      }
}