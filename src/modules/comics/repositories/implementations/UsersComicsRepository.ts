import { Repository, getRepository } from "typeorm";

import { ICreateUserComicDTO } from "../../dto/ICreateUserComicDto";
import { UserComics } from "../../entities/UserComics";
import { IUsersComicsRepository } from "../IUsersComicsRepository";

class UsersComicsRepository implements IUsersComicsRepository {
    private repository: Repository<UserComics>;

    constructor() {
        this.repository = getRepository(UserComics);
    }

    async create({ comic_id, user_id }: ICreateUserComicDTO): Promise<void> {
        const userComic = this.repository.create({ comic_id, user_id });

        await this.repository.save(userComic);
    }
    async listComicsByUserId(user_id: string): Promise<UserComics[]> {
        const userComics = this.repository.find({ user_id });

        return userComics;
    }
    async findComicByUserId({
        comic_id,
        user_id,
    }: ICreateUserComicDTO): Promise<UserComics> {
        const userComics = this.repository.findOne({
            where: { user_id, comic_id },
        });

        return userComics;
    }
}

export { UsersComicsRepository };
