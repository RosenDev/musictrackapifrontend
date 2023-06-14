import { Component } from '@angular/core';
import { UsersService } from './service/users.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html'
})
export class AppComponent {
  public isSidenavOpened = true;

  constructor(private usersService: UsersService) {}

  public toggleSidenavOpened() {
    this.isSidenavOpened = !this.isSidenavOpened;
  }

  public registerDefaultUser(event: Event) {
    event.preventDefault();
    this.usersService.register({
      email: 'test@ttt.com',
      username: 'default',
      password: 'default',
    });
  }

  public isLoggedIn(){
    return this.usersService.isLoggedIn();
  }
}
