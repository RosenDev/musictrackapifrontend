import { Routes } from '@angular/router';
import { UserLoginComponent } from './user-login/user-login.component';
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';
import { authenticatedGuard } from '../guards/authenticated.guard';

export const userRoutes: Routes = [
  { path: 'login', component: UserLoginComponent },
  { path: 'register', component: UserRegisterComponent },
  {
    path: 'logout',
    component: UserLogoutComponent,
    canActivate: [authenticatedGuard],
  },
];
