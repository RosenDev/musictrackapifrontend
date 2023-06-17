import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { UserModule } from './user/user.module';
import { PlaylistModule } from './palylist/playlist.module';
import { AlbumModule } from './album/album.module';
import { TrackModule } from './track/track.module';
import { SharedModule } from './shared.module';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RefreshComponent } from './refresh/refresh.component';

@NgModule({
  declarations: [AppComponent, PageNotFoundComponent, RefreshComponent],
  imports: [SharedModule, UserModule, PlaylistModule, AlbumModule, TrackModule],
  bootstrap: [AppComponent],
})
export class AppModule {}
