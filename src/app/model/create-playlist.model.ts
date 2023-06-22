/**
 * Interface representing the model for creating a playlist.
 */
export interface CreatePlaylistModel {
    /**
     * The name of the playlist.
     */
    name: string;
  
    /**
     * A boolean indicating whether the playlist is public or not.
     */
    isPublic: boolean;
  
    /**
     * An array of track IDs associated with the playlist.
     */
    trackIds: number[];
  
    /**
     * An optional album ID associated with the playlist.
     */
    albumId?: number;
  }
  