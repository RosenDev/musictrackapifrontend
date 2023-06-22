import { CreateTrackModel } from "./create.track.model";

/**
 * Interface representing an update track model.
 * It extends the CreateTrackModel interface.
 */
export interface UpdateTrackModel extends CreateTrackModel {
  /**
   * The ID of the track.
   */
  id: number;
}
