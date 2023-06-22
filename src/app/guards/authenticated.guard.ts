import { inject } from '@angular/core';
import { UsersService } from '../service/users.service';
import { CanActivateFn, Router } from '@angular/router';

/**
 * Authenticated Guard function for route activation.
 * Checks if the user is logged in and allows access to the route,
 * otherwise redirects to another route.
 *
 * @returns True if the user is logged in, or a UrlTree to redirect to another route.
 */
export const authenticatedGuard: CanActivateFn = () => {
  const loggedIn = inject(UsersService).isLoggedIn();
  return loggedIn ? true : inject(Router).createUrlTree(['users/login']);
};
