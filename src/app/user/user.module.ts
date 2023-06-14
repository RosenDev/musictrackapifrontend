import { NgModule } from "@angular/core";
import { UserLoginComponent } from "./user-login/user-login.component";
import { SharedModule } from "../shared.module";
import { UserRegisterComponent } from './user-register/user-register.component';
import { UserLogoutComponent } from './user-logout/user-logout.component';

@NgModule({
    imports: [SharedModule],
    declarations: [UserLoginComponent, UserRegisterComponent, UserLogoutComponent]
})
export class UserModule { }