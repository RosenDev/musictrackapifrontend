import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { UserRegisterModel } from 'src/app/model/user-register.model';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-register',
  templateUrl: './user-register.component.html',
})
export class UserRegisterComponent {
  public usersForm: FormGroup;

  constructor(
    private formBuilder: FormBuilder,
    private usersService: UsersService,
    private router: Router
  ) {
    this.usersForm = this.formBuilder.group({
      email: new FormControl('', [Validators.required, Validators.email]),
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    });
  }

  public submit() {
    if (this.usersForm.invalid) {
      return;
    }

    const userModel = <UserRegisterModel>(
      Object.assign({}, this.usersForm.value)
    );
    this.usersService.register(userModel).subscribe(success => {
      if (success) {
        this.router.navigate(['/']);
      }
    });
  }
}
