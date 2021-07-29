import { Comic } from "../entities/Comic";

export interface IComicsProvider {
    getById(comic_id: number): Promise<Comic>;
}
