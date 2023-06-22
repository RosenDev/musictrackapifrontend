import { CreateAlbumModel } from "./create-album.model";

/**
 * Interface representing an update album model.
 * It extends the CreateAlbumModel interface.
 */
export interface UpdateAlbumModel extends CreateAlbumModel {
  /**
   * The ID of the album.
   */
  id: number;
}
