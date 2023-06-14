import { NgModule } from "@angular/core";
import { PlaylistListComponent } from "./paylist-list/paylist-list.component";
import { SharedModule } from "../shared.module";

@NgModule({
    imports: [SharedModule],
    declarations: [PlaylistListComponent]
})
export class PlaylistModule { }