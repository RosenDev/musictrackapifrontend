import { AlbumModel } from "./album.model";
import { ApiModel } from "./api.model";

export interface PlaylistModel extends ApiModel {
    name: string
    duration: string;
    isPublic: boolean;
    album: AlbumModel;
}


