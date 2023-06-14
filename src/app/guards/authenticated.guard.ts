import { inject } from "@angular/core";
import { CanActivateFn } from "@angular/router";
import { UsersService } from "../service/users.service";

export const authenticatedGuard: CanActivateFn = () => {
    return inject(UsersService).isLoggedIn();
}