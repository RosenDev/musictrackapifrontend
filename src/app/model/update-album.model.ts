import { CreateAlbumModel } from "./create-album.model";


export interface UpdateAlbumModel extends CreateAlbumModel {
    id: number;
}
