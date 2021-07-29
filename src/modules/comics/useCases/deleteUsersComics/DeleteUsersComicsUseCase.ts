import { inject, injectable } from "tsyringe";

import { ICreateUserComicDTO } from "../../dto/ICreateUserComicDto";
import { IUsersComicsRepository } from "../../repositories/IUsersComicsRepository";

@injectable()
class DeleteUsersComicsUseCase {
    constructor(
        @inject("UsersComicsRepository")
        private usersComicsRepository: IUsersComicsRepository
    ) {}

    async execute({ comic_id, user_id }: ICreateUserComicDTO): Promise<void> {
        const userComicExists =
            await this.usersComicsRepository.findComicByUserId({
                user_id,
                comic_id,
            });

        await this.usersComicsRepository.delete(userComicExists);
    }
}

export { DeleteUsersComicsUseCase };
