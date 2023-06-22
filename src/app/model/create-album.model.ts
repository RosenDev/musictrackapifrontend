/**
 * Interface representing the model for creating an album.
 */
export interface CreateAlbumModel {
    /**
     * The name of the album.
     */
    name: string;
  
    /**
     * The publishing year of the album.
     */
    publishingYear: number;
  
    /**
     * An array of track IDs associated with the album.
     */
    trackIds: number[];
  
    /**
     * The duration of the album.
     */
    duration: string;
  }
  