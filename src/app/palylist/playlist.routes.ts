import { Routes } from '@angular/router';
import { PlaylistListComponent } from './paylist-list/paylist-list.component';
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';

export const playlistRoutes: Routes = [
  { path: '', component: PlaylistListComponent },
  { path: 'edit/:id', component: PlaylistEditComponent },
  { path: 'create', component: PlaylistEditComponent },
];
