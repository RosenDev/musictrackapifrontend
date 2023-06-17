import { inject } from '@angular/core';
import { UsersService } from '../service/users.service';
import { CanActivateFn } from '@angular/router';

export const authenticatedGuard: CanActivateFn = () => {
  return inject(UsersService).isLoggedIn();
};
