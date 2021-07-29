import axios from "axios";

import { Character } from "../../entities/Character";
import { ICharactersProvider } from "../ICharactersProvider";

export class CharactersProvider implements ICharactersProvider {
    async getById(character_id: number): Promise<Character> {
        try {
            const response = await axios.get(
                `https://gateway.marvel.com/v1/public/characters/${character_id}?ts=1627477497&apikey=e727c9747111b13e942697e461e47a93&hash=8c04fa1fdae445d5e184376ceebd65a2`
            );

            const data = response.data.data.results;

            // eslint-disable-next-line prefer-const
            let character: Character = new Character();

            character.id = data[0].id;
            character.description = data[0].description;
            character.name = data[0].name;
            character.thumbnail = data[0].thumbnail;

            return character;
        } catch (err) {
            console.log(err.message);
            return null;
        }
    }
}
