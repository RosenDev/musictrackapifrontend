import { CreatePlaylistModel } from "./create-playlist.model";


export interface UpdatePlaylistModel extends CreatePlaylistModel {
    id: number;
}
