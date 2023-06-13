import { NgModule } from "@angular/core";
import { PlaylistListComponent } from "./paylist-list/paylist-list.component";
import { SharedModule } from "../shared.module";
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';

@NgModule({
    imports: [SharedModule],
    declarations: [PlaylistListComponent, PlaylistEditComponent]
})
export class PlaylistModule { }