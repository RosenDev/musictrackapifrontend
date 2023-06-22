import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, catchError, of } from 'rxjs';
import { PagedResponse } from '../model/paged-response.model';
import { ApiModel } from '../model/api.model';
import { FieldFilter } from '../model/field-filter.model';
import { Paging } from '../model/paging.model';
import { baseUrl } from '../environment';
import { LocalService } from './local.service';
import { ApiResponse } from '../model/api-response.model';
import { Router } from '@angular/router';

const TOKEN_KEY = 'token';

/**
 * Base service class providing common functionality for CRUD operations.
 * @template TApiModel The type of the API model.
 */
export class ServiceBase<TApiModel extends ApiModel> {
  /**
   * Constructs the ServiceBase.
   * @param serviceUrl The base URL for the service.
   * @param client The HttpClient instance to perform HTTP requests.
   * @param localService The LocalService instance for local storage operations.
   * @param router The Router instance for navigation.
   */
  constructor(
    protected serviceUrl: string,
    protected client: HttpClient,
    private localService: LocalService,
    private router: Router
  ) {}

  /**
   * Searches entities based on field filters and paging parameters.
   * @param filters The array of field filters to apply for searching.
   * @param paging The paging parameters for retrieving a specific page of results.
   * @returns An Observable of PagedResponse<TApiModel> containing the search results.
   *          In case of an error, it removes the stored token, navigates to the home page,
   *          and returns an empty observable.
   */
  public searchEntites(
    filters: FieldFilter[],
    paging: Paging
  ): Observable<PagedResponse<TApiModel>> {
    const url = `${baseUrl}/${this.serviceUrl}/search?page=${paging.page}&size=${paging.size}`;
    const headers = this.createHttpHeaders();

    return this.client.post<PagedResponse<TApiModel>>(url, filters, { headers }).pipe(
      catchError(() => {
        this.localService.removeData(TOKEN_KEY);
        this.router.navigate(['/']);
        return of();
      })
    );
  }

  /**
   * Retrieves an entity by its ID.
   * @param id The ID of the entity to retrieve.
   * @returns An Observable of ApiResponse<TApiModel> containing the retrieved entity.
   */
  public getEntityById(id: number): Observable<ApiResponse<TApiModel>> {
    const url = `${baseUrl}/${this.serviceUrl}/${id}`;
    const headers = this.createHttpHeaders();

    return this.client.get<ApiResponse<TApiModel>>(url, { headers });
  }

  /**
   * Deletes an entity by its ID.
   * @param id The ID of the entity to delete.
   * @returns An Observable of ApiResponse<object> indicating the result of the delete operation.
   */
  public deleteEntity(id: number): Observable<ApiResponse<object>> {
    const url = `${baseUrl}/${this.serviceUrl}/${id}`;
    const headers = this.createHttpHeaders();

    return this.client.delete<ApiResponse<object>>(url, { headers });
  }

  /**
   * Creates the HTTP headers for the requests.
   * It includes the authorization token retrieved from the local storage.
   * @returns The HttpHeaders object containing the necessary headers.
   */
  protected createHttpHeaders(): HttpHeaders {
    const headers = new HttpHeaders().set(
      'Authorization',
      `Bearer ${this.localService.getData(TOKEN_KEY)}`
    );

    return headers;
  }
}
