import { Request, Response } from "express";
import { container } from "tsyringe";

import { UpdateUserUseCase } from "./UpdateUserUseCase";

class UpdateUserController {
    async handle(request: Request, response: Response): Promise<Response> {
        const { id, name, email, password, passwordConfirm } = request.body;

        const updateUserUseCase = container.resolve(UpdateUserUseCase);

        await updateUserUseCase.execute(id, {
            name,
            email,
            password,
            passwordConfirm,
        });

        return response.status(201).send();
    }
}
export { UpdateUserController };
