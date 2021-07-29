import axios from "axios";

import { Comic } from "../../entities/Comic";
import { IComicsProvider } from "../iComicsProvider";

export class ComicsProvider implements IComicsProvider {
    async getById(comic_id: number): Promise<Comic> {
        try {
            const response = await axios.get(
                `https://gateway.marvel.com/v1/public/comics/${comic_id}?ts=1627477497&apikey=e727c9747111b13e942697e461e47a93&hash=8c04fa1fdae445d5e184376ceebd65a2`
            );

            const data = response.data.data.results;

            // eslint-disable-next-line prefer-const
            let comic: Comic = new Comic();

            comic.id = data[0].id;
            comic.description = data[0].description;
            comic.title = data[0].title;
            comic.thumbnail = data[0].thumbnail;

            return comic;
        } catch (err) {
            console.log(err.message);
            return null;
        }
    }
}
