import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersCharactersByIdUseCase } from "./ListUsersCharactersByIdUseCase";

class ListUsersCharactersByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const listUsersCharactersById = container.resolve(
            ListUsersCharactersByIdUseCase
        );

        const list = await listUsersCharactersById.execute(id);

        return response.status(200).json(list);
    }
}

export { ListUsersCharactersByIdController };
