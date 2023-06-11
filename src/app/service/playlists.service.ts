import { Injectable } from "@angular/core";
import { HttpClient } from '@angular/common/http';
import { PlaylistModel } from "../model/playlist.model";
import { PlaylistCreateModel } from "../model/playlist-create.model";
import { InsertTrackInPlaylistModel } from "../model/insert-track-in-playlist.model";
import { PlaylistUpdateModel } from "../model/playlist-update.model";
import { ServiceBase } from "./service.base";
import { Observable } from "rxjs";
import { baseUrl } from "../environment";
import { LocalService } from "./local.service";
import { ApiResponse } from "../model/api-response.model";

@Injectable()
export class PlaylistsService extends ServiceBase<PlaylistModel> {
  constructor(client: HttpClient, localService: LocalService) {
    super("Playlists", client, localService);
  }

  public createPlaylist(createPlaylistModel: PlaylistCreateModel): Observable<ApiResponse<number>> {
    return this.client.post<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      createPlaylistModel,
      { headers: this.createHttpHeaders() }
    );
  }

  public updatePlaylist(updatePlaylistModel: PlaylistUpdateModel): Observable<ApiResponse<number>> {
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