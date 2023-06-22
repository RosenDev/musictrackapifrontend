import { Injectable } from '@angular/core';
import { ServiceBase } from './service.base';
import { TrackModel } from '../model/track.model';
import { HttpClient } from '@angular/common/http';
import { LocalService } from './local.service';
import { ApiResponse } from '../model/api-response.model';
import { Observable } from 'rxjs';
import { baseUrl } from '../environment';
import { CreateTrackModel } from '../model/create.track.model';
import { UpdateTrackModel } from '../model/update-track.model';
import { Router } from '@angular/router';

/**
 * TracksService
 *
 * The TracksService is a service responsible for managing tracks. It extends the ServiceBase class and provides methods for creating and updating tracks.
 */
@Injectable()
export class TracksService extends ServiceBase<TrackModel> {
  /**
   * TracksService constructor
   * @param client The HttpClient instance used to send HTTP requests.
   * @param localService The LocalService instance used for local storage operations.
   * @param router The Router instance used for navigating to different routes.
   */
  constructor(client: HttpClient, localService: LocalService, router: Router) {
    super('tracks', client, localService, router);
  }

  /**
   * Creates a new track with the specified data.
   * @param createTrackModel The data model representing the track to be created.
   * @returns An Observable that emits an ApiResponse object containing the result of the operation.
   */
  public createTrack(createTrackModel: CreateTrackModel): Observable<ApiResponse<number>> {
    return this.client.post<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      createTrackModel,
      {
        headers: this.createHttpHeaders(),
      }
    );
  }

  /**
   * Updates an existing track with the specified data.
   * @param updateTrackModel The data model representing the track to be updated.
   * @returns An Observable that emits an ApiResponse object containing the result of the operation.
   */
  public updateTrack(updateTrackModel: UpdateTrackModel): Observable<ApiResponse<number>> {
    return this.client.put<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      updateTrackModel,
      {
        headers: this.createHttpHeaders(),
      }
    );
  }
}
