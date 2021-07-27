import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsersCharactersUseCase } from "./CreateUsersCharactersUseCase";

class CreateUsersCharactersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, character_id } = request.body;

        const createUsersCharactersUseCase = container.resolve(
            CreateUsersCharactersUseCase
        );

        await createUsersCharactersUseCase.execute({
            character_id,
            user_id: id,
        });

        return response.status(201).send();
    }
}

export { CreateUsersCharactersController };
