import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserComicDTO } from "../../dto/ICreateUserComicDto";
import { IUsersComicsRepository } from "../../repositories/IUsersComicsRepository";

@injectable()
class CreateUsersComicsUseCase {
    constructor(
        @inject("UsersComicsRepository")
        private usersComicsRepository: IUsersComicsRepository
    ) {}

    async execute({ comic_id, user_id }: ICreateUserComicDTO): Promise<void> {
        const userComicExists =
            await this.usersComicsRepository.findComicByUserId({
                comic_id,
                user_id,
            });

        if (userComicExists) {
            throw new AppError("Esse comic já foi favoritado");
        }

        await this.usersComicsRepository.create({ comic_id, user_id });
    }
}

export { CreateUsersComicsUseCase };
