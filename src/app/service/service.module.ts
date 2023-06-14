import { NgModule } from '@angular/core';
import { PlaylistsService } from './playlists.service';
import { TracksService } from './tracks.service';
import { AlbumsService } from './albums.service';

@NgModule({
  providers: [PlaylistsService, TracksService, AlbumsService],
})
export class ServiceModule {}
