import { Request, Response } from "express";
import { container } from "tsyringe";

import { ListUsersComicsByIdUseCase } from "./ListUsersComicsByIdUseCase";

class ListUsersComicsByIdController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id } = request.body;

        const listUsersComicsById = container.resolve(
            ListUsersComicsByIdUseCase
        );

        const list = await listUsersComicsById.execute(id);

        return response.status(200).json(list);
    }
}
export { ListUsersComicsByIdController };
