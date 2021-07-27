import { inject, injectable } from "tsyringe";

import { ICreateUserComicDTO } from "../../dto/ICreateUserComicDto";
import { IUsersComicsRepository } from "../../repositories/IUsersComicsRepository";

@injectable()
class CreateUsersComicsUseCase {
    constructor(
        @inject("UsersComicsRepository")
        private usersComicsRepository: IUsersComicsRepository
    ) {}

    async execute({ comic_id, user_id }: ICreateUserComicDTO): Promise<void> {
        await this.usersComicsRepository.create({ comic_id, user_id });
    }
}

export { CreateUsersComicsUseCase };
