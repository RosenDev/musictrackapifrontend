import { TrackType } from "./track-type.model";
import { ApiModel } from "./api.model";

/**
 * Interface representing a track.
 */
export interface TrackModel extends ApiModel {
  /**
   * The name of the track.
   */
  name: string;

  /**
   * The writer(s) of the track.
   */
  writtenBy: string;

  /**
   * The performer(s) of the track.
   */
  performedBy: string;

  /**
   * The arranger(s) of the track.
   */
  arrangedBy: string;

  /**
   * The duration of the track.
   */
  duration: string;

  /**
   * The type of the track.
   */
  type: TrackType;
}
