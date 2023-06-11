import { NgModule } from "@angular/core";
import { PlaylistsService } from "./playlists.service";
import { UsersService } from "./users.service";

@NgModule({
    providers: [PlaylistsService, UsersService]
})
export class ServiceModule { }