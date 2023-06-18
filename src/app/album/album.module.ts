import { NgModule } from '@angular/core';
import { AlbumListComponent } from './album-list/album-list.component';
import { SharedModule } from '../shared.module';
import { AlbumEditComponent } from './album-edit/album-edit.component';

@NgModule({
  imports: [SharedModule],
  declarations: [AlbumListComponent, AlbumEditComponent],
})
export class AlbumModule {}
