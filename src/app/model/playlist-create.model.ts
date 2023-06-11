
export interface PlaylistCreateModel {
    name: string;
    isPublic: boolean;
    tracksIds: number[];
    albumId?: number;
}
