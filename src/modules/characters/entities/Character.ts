interface IThumbnailProps {
    path: string;
    extension: string;
}

export class Character {
    id: number;
    name: string;
    description: string;
    thumbnail: IThumbnailProps;
}
