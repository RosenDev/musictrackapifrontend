import { Routes } from '@angular/router';
import { AlbumListComponent } from './album-list/album-list.component';
import { AlbumEditComponent } from './album-edit/album-edit.component';

export const albumRoutes: Routes = [
  { path: '', component: AlbumListComponent },
  { path: 'edit/:id', component: AlbumEditComponent },
  { path: 'create', component: AlbumEditComponent },
];
