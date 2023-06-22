import { TrackType } from './track-type.model';

/**
 * Interface representing the model for creating a track.
 */
export interface CreateTrackModel {
  /**
   * The name of the track.
   */
  name: string;

  /**
   * The name of the composer who wrote the track.
   */
  writtenBy: string;

  /**
   * The name of the artist or group who performed the track.
   */
  performedBy: string;

  /**
   * The name of the person or group who arranged the track.
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
