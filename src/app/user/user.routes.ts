import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { authenticatedGuard } from '../guards/authenticated.guard';
import { anonymousGuard } from '../guards/anonymous.guard';

export const userRoutes: Routes = [
  {
    path: 'login',
    component: UserLoginComponent,
    canActivate: [anonymousGuard]
  },
  {
    path: 'register',
    component: UserRegisterComponent,
    canActivate: [anonymousGuard]
  },
  {
    path: 'logout',
    component: UserLogoutComponent,
    canActivate: [authenticatedGuard] 
  },
];
