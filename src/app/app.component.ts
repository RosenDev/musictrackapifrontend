import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'musictrackapifrontend';
  public isSidenavOpened = true;

  public toggleSidenavOpened(){
    this.isSidenavOpened = !this.isSidenavOpened;
  }
}
