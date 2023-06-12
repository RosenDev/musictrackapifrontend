import { TrackType } from "./track-type.model";


export interface CreateTrackModel {
    name: string;
    writtenBy: string;
    performedBy: string;
    arrangedBy: string;
    duration: string;
    type: TrackType;
}
