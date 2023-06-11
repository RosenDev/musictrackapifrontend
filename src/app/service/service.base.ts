import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from "rxjs";
import { PagedResponse } from "../model/paged-response.model";
import { ApiModel } from "../model/api.model";
import { FieldFilter } from "../model/field-filter.model";
import { Paging } from '../model/paging.model';
import { baseUrl } from '../environment'
import { LocalService } from './local.service';
import { ApiResponse } from '../model/api-response.model';

const TOKEN_KEY = "token";

export class ServiceBase<TApiModel extends ApiModel> {

    constructor(
        protected serviceUrl: string,
        protected client: HttpClient,
        private localService: LocalService
    ) { }

    public searchEntites(filters: FieldFilter[], paging: Paging): Observable<PagedResponse<TApiModel>> {
        return this.client.post<PagedResponse<TApiModel>>(
            `${baseUrl}/${this.serviceUrl}/search?page=${paging.page}&size=${paging.size}`,
            filters,
            {headers: this.createHttpHeaders()}
        );
    }

    public getEntityById(id: number): Observable<TApiModel> {
        return this.client.get<TApiModel>(`${baseUrl}/${this.serviceUrl}/${id}`);
    }

    public deleteEntity(id: number): Observable<ApiResponse<object>> {
        return this.client.delete<ApiResponse<object>>(`${baseUrl}/${this.serviceUrl}/${id}`);
    }

    protected createHttpHeaders(): HttpHeaders {
        const headers = new HttpHeaders()
            .set("Authorization", `Bearer ${this.localService.getData(TOKEN_KEY)}`)

            return headers;
    }
}
