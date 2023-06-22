import { AlbumModel } from "./album.model";
import { ApiModel } from "./api.model";

/**
 * Interface representing a playlist.
 */
export interface PlaylistModel extends ApiModel {
  /**
   * The name of the playlist.
   */
  name: string;

  /**
   * The duration of the playlist.
   */
  duration: string;

  /**
   * Indicates whether the playlist is public or not.
   */
  isPublic: boolean;

  /**
   * The album associated with the playlist.
   */
  album: AlbumModel;
}
