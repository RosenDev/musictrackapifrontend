import { TrackModel } from "./track.model";
import { ApiModel } from "./api.model";


export interface AlbumModel extends ApiModel {
    name: string;
    publishingYear: number;
    tracks: TrackModel[];
    duration: string;
}
