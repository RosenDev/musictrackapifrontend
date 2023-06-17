import { inject } from "@angular/core";
import { CanActivateFn, Router } from "@angular/router";
import { UsersService } from "../service/users.service";

export const anonymousGuard: CanActivateFn = () => {
    const canActivate = !inject(UsersService).isLoggedIn();

    if(!canActivate){
        inject(Router).navigate(['**']);
    }

    return canActivate;
}