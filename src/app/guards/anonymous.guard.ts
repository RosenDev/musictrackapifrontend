import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { UsersService } from '../service/users.service';

/**
 * Anonymous Guard function for route activation.
 * Checks if the user is not logged in and allows access to the route,
 * otherwise redirects to another route.
 *
 * @returns True if the user is not logged in, or a UrlTree to redirect to another route.
 */
export const anonymousGuard: CanActivateFn = () => {
  return !inject(UsersService).isLoggedIn()
    ? true
    : inject(Router).createUrlTree(['**']);
};
