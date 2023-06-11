import { PlaylistCreateModel } from "./playlist-create.model";


export interface PlaylistUpdateModel extends PlaylistCreateModel {
    id: number;
}
