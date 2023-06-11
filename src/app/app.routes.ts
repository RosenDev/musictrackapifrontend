import { Routes } from "@angular/router";
import { PaylistListComponent } from "./palylist/paylist-list/paylist-list.component";
import { userRoutes } from "./user/user.routes";

export const routes: Routes = [
    { path: "", redirectTo: "playlists", pathMatch: "full" },
    { path: "playlists", component: PaylistListComponent },
    { path: "users", children: userRoutes }
]