import { Request, Response } from "express";
import { container } from "tsyringe";

import { CreateUsersComicsUseCase } from "./CreateUsersComicsUseCase";

class CreateUsersComicsController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, comic_id } = request.body;

        const createUsersComicsUseCase = container.resolve(
            CreateUsersComicsUseCase
        );

        await createUsersComicsUseCase.execute({
            comic_id,
            user_id: id,
        });

        return response.status(201).send();
    }
}

export { CreateUsersComicsController };
