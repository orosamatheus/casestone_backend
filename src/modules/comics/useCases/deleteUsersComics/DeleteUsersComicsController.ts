import { Request, Response } from "express";
import { container } from "tsyringe";

import { DeleteUsersComicsUseCase } from "./DeleteUsersComicsUseCase";

class DeleteUsersComicsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { comic_id, id } = request.body;

        const deleteUsersComicsUseCase = container.resolve(
            DeleteUsersComicsUseCase
        );

        await deleteUsersComicsUseCase.execute({
            comic_id,
            user_id: id,
        });

        return response.status(200).send();
    }
}

export { DeleteUsersComicsController };
