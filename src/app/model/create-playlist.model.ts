
export interface CreatePlaylistModel {
    name: string;
    isPublic: boolean;
    trackIds: number[];
    albumId?: number;
}
