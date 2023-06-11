import { AlbumModel } from "./album.model";
import { TrackInPlaylistModel } from "./track-in-playlist.model";
import { ApiModel } from "./api.model";

export interface PlaylistModel extends ApiModel {
    name: string
    duration: string;
    isPublic: boolean;
    tracks: TrackInPlaylistModel[];
    album: AlbumModel;
}


