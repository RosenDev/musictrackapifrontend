import { Routes } from '@angular/router';
import { userRoutes } from './user/user.routes';
import { trackRoutes } from './track/track.routes';
import { albumRoutes } from './album/album.routes';
import { authenticatedChildGuard } from './guards/authenticated-child.guard';
import { playlistRoutes } from './palylist/playlist.routes';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { RefreshComponent } from './refresh/refresh.component';

export const routes: Routes = [
  {
    path: '',
    redirectTo: '/playlists',
    pathMatch: 'full'
  },
  {
    path: 'playlists',
    children: playlistRoutes,
    canActivateChild: [authenticatedChildGuard]
  },
  {
    path: 'tracks',
    children: trackRoutes,
    canActivateChild: [authenticatedChildGuard]
  },
  {
    path: 'albums',
    children: albumRoutes,
    canActivateChild: [authenticatedChildGuard]
  },
  {
    path: 'users',
    children: userRoutes
  },
  {
    path: '**',
    redirectTo: 'not-found',
    pathMatch: 'full'
  },
  {
    path: 'not-found',
    component: PageNotFoundComponent
  },
  {
    path: 'refresh',
    component: RefreshComponent
  }
];
