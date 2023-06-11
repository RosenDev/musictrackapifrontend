import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ServiceModule } from './service/service.module';
import { MatSidenavModule } from '@angular/material/sidenav'
import {MatListModule} from '@angular/material/list';
import { HttpClientModule } from '@angular/common/http';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './palylist/playlist.module';
import { ErrorStateMatcher, ShowOnDirtyErrorStateMatcher } from '@angular/material/core';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    ServiceModule,
    UserModule,
    PlaylistModule,
    MatSidenavModule,
    MatListModule
  ],
  providers: [{ provide: ErrorStateMatcher, useClass: ShowOnDirtyErrorStateMatcher }],
  bootstrap: [AppComponent]
})
export class AppModule { }
