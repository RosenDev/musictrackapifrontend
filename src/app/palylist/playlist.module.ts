import { NgModule } from "@angular/core";
import { PaylistListComponent } from "./paylist-list/paylist-list.component";
import { SharedModule } from "../shared.module";
import { PlaylistEditComponent } from './playlist-edit/playlist-edit.component';

@NgModule({
    imports: [SharedModule],
    declarations: [PaylistListComponent, PlaylistEditComponent],
    exports: [PaylistListComponent]
})
export class PlaylistModule { }