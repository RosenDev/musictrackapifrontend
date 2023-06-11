import { NgModule } from "@angular/core";
import { PaylistListComponent } from "./paylist-list/paylist-list.component";
import { SharedModule } from "../shared.module";

@NgModule({
    imports: [SharedModule],
    declarations: [PaylistListComponent],
    exports: [PaylistListComponent]
})
export class PlaylistModule { }