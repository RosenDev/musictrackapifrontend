import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UsersService } from 'src/app/service/users.service';

@Component({
  selector: 'app-user-logout',
  template: '',
})
export class UserLogoutComponent implements OnInit {
  constructor(private userService: UsersService, private router: Router) {}
  ngOnInit(): void {
    this.logout();
  }

  private logout() {
    this.userService.logout();
    this.router.navigate(['/']);
  }
}
