import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { UserLoginModel } from '../model/user-login.model';
import { baseUrl } from '../environment';
import { LocalService } from './local.service';
import { UserModel } from '../model/user.model';
import { ApiResponse } from '../model/api-response.model';
import { UserRegisterModel } from '../model/user-register.model';

const TOKEN_KEY = 'token';

@Injectable({
  providedIn: 'root',
})
export class UsersService {
  constructor(private client: HttpClient, private localService: LocalService) {}

  public login(userLoginModel: UserLoginModel): void {
    this.client
      .post<ApiResponse<string>>(`${baseUrl}/users/login`, userLoginModel)
      .subscribe(res => {
        this.localService.saveData(TOKEN_KEY, res.result);
      });
  }

  public logout() {
    this.localService.removeData(TOKEN_KEY);
  }

  public register(userRegisterModel: UserRegisterModel): void {
    this.client
      .post<ApiResponse<string>>(`${baseUrl}/users/register`, userRegisterModel)
      .subscribe(res => {
        this.localService.saveData(TOKEN_KEY, res.result);
      });
  }

  public getCurrentUser(): Observable<ApiResponse<UserModel>> {
    return this.client.post<ApiResponse<UserModel>>(
      `${baseUrl}/users/getcurrentuser`,
      null
    );
  }

  public isLoggedIn(): boolean {
    return this.localService.getData(TOKEN_KEY) !== null;
  }
}
