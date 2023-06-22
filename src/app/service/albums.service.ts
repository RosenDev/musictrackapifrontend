/**
 * AlbumsService is responsible for managing album-related operations.
 * It extends the ServiceBase class and provides additional functionality
 * for creating and updating albums.
 */

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LocalService } from './local.service';
import { Router } from '@angular/router';

import { ServiceBase } from './service.base';
import { AlbumModel } from '../model/album.model';
import { ApiResponse } from '../model/api-response.model';
import { baseUrl } from '../environment';
import { Observable } from 'rxjs';
import { UpdateAlbumModel } from '../model/update-album.model';
import { CreateAlbumModel } from '../model/create-album.model';

@Injectable()
export class AlbumsService extends ServiceBase<AlbumModel> {
  /**
   * Creates an instance of AlbumsService.
   * @param httpClient - The HttpClient instance used for HTTP requests.
   * @param localService - The LocalService instance for local storage operations.
   * @param router - The Router instance for navigation.
   */
  constructor(
    httpClient: HttpClient,
    localService: LocalService,
    router: Router
  ) {
    super('albums', httpClient, localService, router);
  }

  /**
   * Creates a new album.
   * @param createAlbumModel - The album data to be created.
   * @returns An Observable of ApiResponse<number> indicating the success status and album ID.
   */
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

  /**
   * Updates an existing album.
   * @param updateAlbumModel - The album data to be updated.
   * @returns An Observable of ApiResponse<number> indicating the success status.
   */
  public updateAlbum(
    updateAlbumModel: UpdateAlbumModel
  ): Observable<ApiResponse<number>> {
    return this.client.put<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      updateAlbumModel,
      {
        headers: this.createHttpHeaders(),
      }
    );
  }
}
