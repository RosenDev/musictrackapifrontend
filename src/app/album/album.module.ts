import { NgModule } from '@angular/core';
import { AlbumListComponent } from './album-list/album-list.component';
import { SharedModule } from '../shared.module';

@NgModule({
  imports: [SharedModule],
  declarations: [AlbumListComponent],
})
export class AlbumModule {}
