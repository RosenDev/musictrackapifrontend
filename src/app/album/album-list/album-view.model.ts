/**
 * Represents the view model for an album.
 */
export interface AlbumViewModel {
  /**
   * The ID of the album.
   */
  id: number;

  /**
   * The name of the album.
   */
  name: string;

  /**
   * The publishing year of the album.
   */
  publishingYear: number;

  /**
   * The list of tracks in the album.
   */
  tracks: string[];

  /**
   * The duration of the album.
   */
  duration: string;
}
