import { inject, injectable } from "tsyringe";

import { UserComics } from "../../entities/UserComics";
import { UsersComicsRepository } from "../../repositories/implementations/UsersComicsRepository";

@injectable()
class ListUsersComicsByIdUseCase {
    constructor(
        @inject("UsersComicsRepository")
        private usersComicsRepository: UsersComicsRepository
    ) {}

    async execute(user_id: string): Promise<UserComics[]> {
        const userComics = await this.usersComicsRepository.listComicsByUserId(
            user_id
        );

        return userComics;
    }
}

export { ListUsersComicsByIdUseCase };
