import { ICreateUserCharacterDTO } from "../dto/ICreateUserCharacterDto";
import { UserCharacters } from "../entities/UserCharacters";

interface IUsersCharactersRepository {
    create({ character_id, user_id }: ICreateUserCharacterDTO): Promise<void>;
    listCharactersByUserId(user_id: string): Promise<UserCharacters[]>;
    findCharacterByUserId({
        character_id,
        user_id,
    }: ICreateUserCharacterDTO): Promise<UserCharacters>;
    delete(UserCharacters: UserCharacters): Promise<void>;
}

export { IUsersCharactersRepository };
