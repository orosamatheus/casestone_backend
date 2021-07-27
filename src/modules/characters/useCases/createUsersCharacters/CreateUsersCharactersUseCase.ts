import { inject, injectable } from "tsyringe";

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
        await this.usersCharactersRepository.create({
            character_id,
            user_id,
        });
    }
}

export { CreateUsersCharactersUseCase };
