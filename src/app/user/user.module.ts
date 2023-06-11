import { NgModule } from "@angular/core";
import { UserLoginComponent } from "./user-login/user-login.component";

@NgModule({
    declarations: [UserLoginComponent],
    exports: [UserLoginComponent]
})
export class UserModule { }