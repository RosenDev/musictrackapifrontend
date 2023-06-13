import { NgModule } from '@angular/core';
import { TrackListComponent } from './track-list/track-list.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [TrackListComponent],
})
export class TrackModule {}
