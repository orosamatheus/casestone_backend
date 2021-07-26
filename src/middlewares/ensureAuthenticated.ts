import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UsersRepository } from "../modules/accounts/repositories/implementations/UsersRepository";

interface IPayload {
    sub: string;
}

export async function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    const authHeader = request.headers.authorization;

    if (!authHeader) {
        throw new AppError("Token missing", 401);
    }

    const [, token] = authHeader.split(" ");

    try {
        const { sub: user_id } = verify(
            token,
            "473994c72ec25990b03d885110b6bb06"
        ) as IPayload;

        const usersRepository = new UsersRepository();

        const usersExists = usersRepository.findById(user_id);

        if (!usersExists) {
            throw new AppError("User does not exists", 401);
        }

        next();
    } catch {
        throw new AppError("invalid token", 401);
    }
}
