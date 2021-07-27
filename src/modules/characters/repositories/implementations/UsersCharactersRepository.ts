import { Repository, getRepository } from "typeorm";

import { ICreateUserCharacterDTO } from "../../dto/ICreateUserCharacterDto";
import { UserCharacters } from "../../entities/UserCharacters";
import { IUsersCharactersRepository } from "../IUsersCharactersRepository";

class UsersCharactersRepository implements IUsersCharactersRepository {
    private repository: Repository<UserCharacters>;

    constructor() {
        this.repository = getRepository(UserCharacters);
    }

    async create({
        character_id,
        user_id,
    }: ICreateUserCharacterDTO): Promise<void> {
        const userCharacter = this.repository.create({ character_id, user_id });

        await this.repository.save(userCharacter);
    }
    async findByUserId(user_id: string): Promise<UserCharacters[]> {
        const userCharacters = this.repository.find({ user_id });

        return userCharacters;
    }
}

export { UsersCharactersRepository };
