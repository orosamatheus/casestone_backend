import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUsersComicsController } from "../modules/comics/useCases/createUsersComics/CreateUsersComicsController";
import { ListUsersComicsByIdController } from "../modules/comics/useCases/listUsersComicsById/ListUsersComicsByIdController";

const usersComicsRoutes = Router();

const createUsersComicsController = new CreateUsersComicsController();
const listUsersComicsByIdController = new ListUsersComicsByIdController();

usersComicsRoutes.post(
    "/",
    ensureAuthenticated,
    createUsersComicsController.handle
);

usersComicsRoutes.get(
    "/",
    ensureAuthenticated,
    listUsersComicsByIdController.handle
);

export { usersComicsRoutes };
