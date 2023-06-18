import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

export const authenticatedChildGuard: CanActivateChildFn = () => {
  const loggedIn = inject(UsersService).isLoggedIn();
  return loggedIn? true: inject(Router).createUrlTree(['users/login']);
};