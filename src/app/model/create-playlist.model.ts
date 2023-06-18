
export interface CreatePlaylistModel {
    name: string;
    isPublic: boolean;
    tracksIds: number[];
    albumId?: number;
}
