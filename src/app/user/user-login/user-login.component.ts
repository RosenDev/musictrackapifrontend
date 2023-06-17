import { Component } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserLoginModel } from 'src/app/model/user-login.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
})
export class UserLoginComponent {
  public usersForm: FormGroup;
  public errorMessage = '';

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.usersForm = this.formBuilder.group({
      username: new FormControl('', Validators.required),
      password: new FormControl('', Validators.required),
    });
  }

  public submit() {
    const userModel = <UserLoginModel>Object.assign({}, this.usersForm.value);
    this.usersService.login(userModel).subscribe(success => {
      if (success) {
        this.router.navigate(['/']);
      }
    });
  }
}
