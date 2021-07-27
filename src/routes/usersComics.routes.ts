import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUsersComicsController } from "../modules/comics/useCases/createUsersComics/CreateUsersComicsController";

const usersComicsRoutes = Router();

const createUsersComicsController = new CreateUsersComicsController();

usersComicsRoutes.post(
    "/",
    ensureAuthenticated,
    createUsersComicsController.handle
);

export { usersComicsRoutes };
