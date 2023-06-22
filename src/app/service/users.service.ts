import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginModel } from '../model/user-login.model';
import { baseUrl } from '../environment';
import { LocalService } from './local.service';
import { ApiResponse } from '../model/api-response.model';
import { UserRegisterModel } from '../model/user-register.model';
import { Observable, catchError, map, of } from 'rxjs';

const TOKEN_KEY = 'token';

/**
 * UsersService
 *
 * The UsersService is a service responsible for user authentication and registration.
 */
@Injectable({
  providedIn: 'root',
})
export class UsersService {
  /**
   * UsersService constructor
   * @param client The HttpClient instance used to send HTTP requests.
   * @param localService The LocalService instance used for local storage operations.
   */
  constructor(private client: HttpClient, private localService: LocalService) {}

  /**
   * Logs in a user with the specified login credentials.
   * @param userLoginModel The data model representing the user's login credentials.
   * @returns An Observable that emits a boolean value indicating the login status.
   */
  public login(userLoginModel: UserLoginModel): Observable<boolean> {
    return this.client
      .post<ApiResponse<string>>(`${baseUrl}/users/login`, userLoginModel)
      .pipe(
        map(x => {
          this.localService.saveData(TOKEN_KEY, x.result);
          return true;
        })
      )
      .pipe(catchError(() => of(false)));
  }

  /**
   * Logs out the currently authenticated user.
   */
  public logout() {
    this.localService.removeData(TOKEN_KEY);
  }

  /**
   * Registers a new user with the specified registration data.
   * @param userRegisterModel The data model representing the user's registration data.
   * @returns An Observable that emits a boolean value indicating the registration status.
   */
  public register(userRegisterModel: UserRegisterModel): Observable<boolean> {
    return this.client
      .post<ApiResponse<string>>(`${baseUrl}/users/register`, userRegisterModel)
      .pipe(
        map(x => {
          this.localService.saveData(TOKEN_KEY, x.result);
          return true;
        })
      )
      .pipe(catchError(() => of(false)));
  }

  /**
   * Checks if a user is currently logged in.
   * @returns A boolean value indicating whether a user is logged in or not.
   */
  public isLoggedIn(): boolean {
    return this.localService.getData(TOKEN_KEY) !== null;
  }
}
