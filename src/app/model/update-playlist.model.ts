import { CreatePlaylistModel } from "./create-playlist.model";

/**
 * Interface representing an update playlist model.
 * It extends the CreatePlaylistModel interface.
 */
export interface UpdatePlaylistModel extends CreatePlaylistModel {
  /**
   * The ID of the playlist.
   */
  id: number;
}
