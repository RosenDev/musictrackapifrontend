import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PlaylistModel } from "../model/playlist.model";
import { CreatePlaylistModel } from "../model/create-playlist.model";
import { InsertTrackInPlaylistModel } from "../model/insert-track-in-playlist.model";
import { UpdatePlaylistModel } from "../model/update-playlist.model";
import { ServiceBase } from "./service.base";
import { Observable } from "rxjs";
import { baseUrl } from "../environment";
import { LocalService } from "./local.service";
import { ApiResponse } from "../model/api-response.model";
import { Router } from "@angular/router";

@Injectable()
export class PlaylistsService extends ServiceBase<PlaylistModel> {
  constructor(client: HttpClient, localService: LocalService, router: Router) {
    super("Playlists", client, localService, router);
  }

  public createPlaylist(createPlaylistModel: CreatePlaylistModel): Observable<ApiResponse<number>> {
    return this.client.post<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      createPlaylistModel,
      { headers: this.createHttpHeaders() }
    );
  }

  public updatePlaylist(updatePlaylistModel: UpdatePlaylistModel): Observable<ApiResponse<number>> {
    return this.client.put<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      updatePlaylistModel,
      { headers: this.createHttpHeaders() }
    );
  }
  public insertTrackInPlaylist(insertTrackPlaylistModel: InsertTrackInPlaylistModel): Observable<ApiResponse<number>> {
    return this.client.post<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      insertTrackPlaylistModel,
      { headers: this.createHttpHeaders() }
    );
  }
}