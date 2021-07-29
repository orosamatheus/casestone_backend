import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { ICreateUserCharacterDTO } from "../../dto/ICreateUserCharacterDto";
import { IUsersCharactersRepository } from "../../repositories/IUsersCharactersRepository";

@injectable()
class CreateUsersCharactersUseCase {
    constructor(
        @inject("UsersCharactersRepository")
        private usersCharactersRepository: IUsersCharactersRepository
    ) {}

    async execute({
        character_id,
        user_id,
    }: ICreateUserCharacterDTO): Promise<void> {
        const userCharacterExists =
            await this.usersCharactersRepository.findCharacterByUserId({
                user_id,
                character_id,
            });

        if (userCharacterExists) {
            throw new AppError("Esse character já foi favoritado!");
        }

        await this.usersCharactersRepository.create({
            character_id,
            user_id,
        });
    }
}

export { CreateUsersCharactersUseCase };
