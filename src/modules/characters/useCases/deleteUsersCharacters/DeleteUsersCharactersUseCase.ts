import { inject, injectable } from "tsyringe";

import { ICreateUserCharacterDTO } from "../../dto/ICreateUserCharacterDto";
import { IUsersCharactersRepository } from "../../repositories/IUsersCharactersRepository";

@injectable()
class DeleteUsersCharactersUseCase {
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

        await this.usersCharactersRepository.delete(userCharacterExists);
    }
}

export { DeleteUsersCharactersUseCase };
