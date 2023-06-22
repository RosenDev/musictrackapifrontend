/**
 * Represents a playlist view model.
 */
export interface PlaylistViewModel {
  /**
   * The ID of the playlist.
   */
  id: number;

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
   * The name of the album associated with the playlist.
   */
  album: string;
}
