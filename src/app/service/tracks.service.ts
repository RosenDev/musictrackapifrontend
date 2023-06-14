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

@Injectable()
export class TracksService extends ServiceBase<TrackModel> {
  constructor(client: HttpClient, localService: LocalService, router: Router) {
    super('tracks', client, localService, router);
  }

  public createTrack(
    createTrackModel: CreateTrackModel
  ): Observable<ApiResponse<number>> {
    return this.client.post<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      createTrackModel,
      {
        headers: this.createHttpHeaders(),
      }
    );
  }

  public updateTrack(
    updateTrackModel: UpdateTrackModel
  ): Observable<ApiResponse<number>> {
    return this.client.post<ApiResponse<number>>(
      `${baseUrl}/${this.serviceUrl}`,
      updateTrackModel,
      {
        headers: this.createHttpHeaders(),
      }
    );
  }
}
