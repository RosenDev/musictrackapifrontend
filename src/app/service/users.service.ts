import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserLoginModel } from '../model/user-login.model';
import { baseUrl } from '../environment';
import { LocalService } from './local.service';
import { ApiResponse } from '../model/api-response.model';
import { UserRegisterModel } from '../model/user-register.model';
import { Observable, catchError, map, of } from 'rxjs';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private client: HttpClient, private localService: LocalService) {}

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

  public logout() {
    this.localService.removeData(TOKEN_KEY);
  }

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

  public isLoggedIn(): boolean {
    return this.localService.getData(TOKEN_KEY) !== null;
  }
}
