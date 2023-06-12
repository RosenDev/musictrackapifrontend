import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './palylist/playlist.module';
import { SharedModule } from './shared.module';

@NgModule({
  declarations: [AppComponent],
  imports: [SharedModule, UserModule, PlaylistModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
