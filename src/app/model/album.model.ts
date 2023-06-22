import { TrackModel } from './track.model';
import { ApiModel } from './api.model';

/**
 * Interface representing an AlbumModel.
 */
export interface AlbumModel extends ApiModel {
  /**
   * The name of the album.
   */
  name: string;

  /**
   * The publishing year of the album.
   */
  publishingYear: number;

  /**
   * An array of TrackModel objects representing the tracks of the album.
   */
  tracks: TrackModel[];

  /**
   * The duration of the album.
   */
  duration: string;
}
