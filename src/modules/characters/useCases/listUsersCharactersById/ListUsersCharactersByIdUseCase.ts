import { inject, injectable } from "tsyringe";

import { UserCharacters } from "../../entities/UserCharacters";
import { UsersCharactersRepository } from "../../repositories/implementations/UsersCharactersRepository";

@injectable()
class ListUsersCharactersByIdUseCase {
    constructor(
        @inject("UsersCharactersRepository")
        private usersCharactersRepository: UsersCharactersRepository
    ) {}

    async execute(user_id: string): Promise<UserCharacters[]> {
        const usersCharacters =
            await this.usersCharactersRepository.listCharactersByUserId(
                user_id
            );

        return usersCharacters;
    }
}

export { ListUsersCharactersByIdUseCase };
