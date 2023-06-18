import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

export const anonymousGuard: CanActivateFn = () => {
  return !inject(UsersService).isLoggedIn()
    ? true
    : inject(Router).createUrlTree(['**']);
};
