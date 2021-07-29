import { inject, injectable } from "tsyringe";

import { UserCharacters } from "../../entities/UserCharacters";
import { CharactersProvider } from "../../providers/implementations/CharactersProvider";
import { UsersCharactersRepository } from "../../repositories/implementations/UsersCharactersRepository";

@injectable()
class ListUsersCharactersByIdUseCase {
    constructor(
        @inject("UsersCharactersRepository")
        private usersCharactersRepository: UsersCharactersRepository,

        @inject("CharactersProvider")
        private charactersProvider: CharactersProvider
    ) {}

    async execute(user_id: string): Promise<UserCharacters[]> {
        const usersCharacters =
            await this.usersCharactersRepository.listCharactersByUserId(
                user_id
            );

        const list = await Promise.all(
            usersCharacters.map(async (userCharacter: UserCharacters) => {
                // eslint-disable-next-line no-param-reassign
                userCharacter.character = await this.charactersProvider.getById(
                    userCharacter.character_id
                );
                return userCharacter;
            })
        );

        return list;
    }
}

export { ListUsersCharactersByIdUseCase };
