import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { PlaylistModel } from '../model/playlist.model';
import { CreatePlaylistModel } from '../model/create-playlist.model';
import { UpdatePlaylistModel } from '../model/update-playlist.model';
import { ServiceBase } from './service.base';
import { Observable } from 'rxjs';
import { baseUrl } from '../environment';
import { LocalService } from './local.service';
import { ApiResponse } from '../model/api-response.model';
import { Router } from '@angular/router';

/**
 * Service for managing playlists.
 */
@Injectable()
export class PlaylistsService extends ServiceBase<PlaylistModel> {
  /**
   * Constructs the PlaylistsService.
   * @param client The HttpClient instance to perform HTTP requests.
   * @param localService The LocalService instance for local storage operations.
   * @param router The Router instance for navigation.
   */
  constructor(client: HttpClient, localService: LocalService, router: Router) {
    super('Playlists', client, localService, router);
  }

  /**
   * Creates a new playlist.
   * @param createPlaylistModel The model containing the playlist data to be created.
   * @returns An Observable of ApiResponse<number> indicating the result of the operation.
   */
  public createPlaylist(
    createPlaylistModel: CreatePlaylistModel
  ): Observable<ApiResponse<number>> {
    const url = `${baseUrl}/${this.serviceUrl}`;
    const headers = this.createHttpHeaders();

    return this.client.post<ApiResponse<number>>(url, createPlaylistModel, {
      headers,
    });
  }

  /**
   * Updates an existing playlist.
   * @param updatePlaylistModel The model containing the updated playlist data.
   * @returns An Observable of ApiResponse<number> indicating the result of the operation.
   */
  public updatePlaylist(
    updatePlaylistModel: UpdatePlaylistModel
  ): Observable<ApiResponse<number>> {
    const url = `${baseUrl}/${this.serviceUrl}`;
    const headers = this.createHttpHeaders();

    return this.client.put<ApiResponse<number>>(url, updatePlaylistModel, {
      headers,
    });
  }
}
