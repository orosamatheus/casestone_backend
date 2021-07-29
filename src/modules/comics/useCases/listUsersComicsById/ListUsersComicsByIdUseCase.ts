import { inject, injectable } from "tsyringe";

import { UserComics } from "../../entities/UserComics";
import { ComicsProvider } from "../../providers/implementations/ComicsProvider";
import { UsersComicsRepository } from "../../repositories/implementations/UsersComicsRepository";

@injectable()
class ListUsersComicsByIdUseCase {
    constructor(
        @inject("UsersComicsRepository")
        private usersComicsRepository: UsersComicsRepository,

        @inject("ComicsProvider")
        private comicsProvider: ComicsProvider
    ) {}

    async execute(user_id: string): Promise<UserComics[]> {
        const userComics = await this.usersComicsRepository.listComicsByUserId(
            user_id
        );

        const list = await Promise.all(
            userComics.map(async (userComic: UserComics) => {
                // eslint-disable-next-line no-param-reassign
                userComic.comic = await this.comicsProvider.getById(
                    userComic.comic_id
                );
                return userComic;
            })
        );

        return list;
    }
}

export { ListUsersComicsByIdUseCase };
