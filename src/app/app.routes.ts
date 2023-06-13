import { Routes } from '@angular/router';
import { PlaylistListComponent } from './palylist/paylist-list/paylist-list.component';
import { userRoutes } from './user/user.routes';
import { trackRoutes } from './track/track.routes';
import { albumRoutes } from './album/album.routes';

export const routes: Routes = [
  { path: '', redirectTo: 'playlists?page=1&size=100', pathMatch: 'full' },
  { path: 'playlists', component: PlaylistListComponent },
  { path: 'tracks', children: trackRoutes },
  { path: 'albums', children: albumRoutes },
  { path: 'users', children: userRoutes },
];
