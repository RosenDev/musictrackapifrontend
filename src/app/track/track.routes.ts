import { Routes } from '@angular/router';
import { TrackListComponent } from './track-list/track-list.component';
import { TrackEditComponent } from './track-edit/track-edit.component';

export const trackRoutes: Routes = [
  { path: '', component: TrackListComponent },
  { path: 'edit/:id', component: TrackEditComponent },
  { path: 'create', component: TrackEditComponent },
];
