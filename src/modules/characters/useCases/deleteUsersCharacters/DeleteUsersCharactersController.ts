import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUsersCharactersUseCase } from "./DeleteUsersCharactersUseCase";

class DeleteUsersCharactersController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { character_id, id } = request.body;

        const deleteUsersCharactersUseCase = container.resolve(
            DeleteUsersCharactersUseCase
        );

        await deleteUsersCharactersUseCase.execute({
            character_id,
            user_id: id,
        });

        return response.status(200).send();
    }
}
export { DeleteUsersCharactersController };
