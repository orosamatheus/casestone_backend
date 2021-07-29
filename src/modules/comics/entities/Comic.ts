interface IThubnailProps {
    path: string;
    extension: string;
}

class Comic {
    id: number;
    title: string;
    description: string;
    thumbnail: IThubnailProps;
}

export { Comic };
