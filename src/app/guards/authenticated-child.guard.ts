import { inject } from "@angular/core";
import { CanActivateChildFn } from "@angular/router";
import { UsersService } from "../service/users.service";

export const authenticatedChildGuard: CanActivateChildFn = () => {
    return inject(UsersService).isLoggedIn();
}