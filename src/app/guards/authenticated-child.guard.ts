import { inject } from '@angular/core';
import { CanActivateChildFn, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

/**
 * Authenticated Child Guard function for route activation.
 * Checks if the user is logged in and allows access to child routes,
 * otherwise redirects to another route.
 *
 * @returns True if the user is logged in, or a UrlTree to redirect to another route.
 */
export const authenticatedChildGuard: CanActivateChildFn = () => {
  const loggedIn = inject(UsersService).isLoggedIn();
  return loggedIn ? true : inject(Router).createUrlTree(['users/login']);
};
