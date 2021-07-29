import { ICreateUserComicDTO } from "../dto/ICreateUserComicDto";
import { UserComics } from "../entities/UserComics";

interface IUsersComicsRepository {
    create({ comic_id, user_id }: ICreateUserComicDTO): Promise<void>;
    listComicsByUserId(user_id: string): Promise<UserComics[]>;
    findComicByUserId({
        comic_id,
        user_id,
    }: ICreateUserComicDTO): Promise<UserComics>;
    delete(UserComics: UserComics): Promise<void>;
}

export { IUsersComicsRepository };
