import { NgModule } from '@angular/core';
import { TrackListComponent } from './track-list/track-list.component';
import { SharedModule } from '../shared.module';
import { TrackEditComponent } from './track-edit/track-edit.component';

@NgModule({
  imports: [SharedModule],
  declarations: [TrackListComponent, TrackEditComponent],
})
export class TrackModule {}
