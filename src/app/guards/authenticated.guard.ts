import { inject } from '@angular/core';
import { UsersService } from '../service/users.service';
import { CanActivateFn, Router } from '@angular/router';

export const authenticatedGuard: CanActivateFn = () => {
  const loggedIn = inject(UsersService).isLoggedIn();
  return loggedIn ? true : inject(Router).createUrlTree(['users/login']);
};
