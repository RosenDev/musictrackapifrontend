import { TrackType } from "./track-type.model";
import { ApiModel } from "./api.model";


export interface TrackModel extends ApiModel {
    name: string;
    writtenBy: string;
    performedBy: string;
    arrangedBy: string;
    duration: string;
    type: TrackType;
}
