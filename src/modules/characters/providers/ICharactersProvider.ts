import { Character } from "../entities/Character";

export interface ICharactersProvider {
    getById(character_id: number): Promise<Character>;
}
