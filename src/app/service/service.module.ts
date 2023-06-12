import { NgModule } from '@angular/core';
import { PlaylistsService } from './playlists.service';
import { UsersService } from './users.service';
import { TracksService } from './tracks.service';
import { AlbumsService } from './albums.service';

@NgModule({
  providers: [PlaylistsService, UsersService, TracksService, AlbumsService],
})
export class ServiceModule {}
