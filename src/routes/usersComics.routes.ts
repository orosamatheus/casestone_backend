import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUsersComicsController } from "../modules/comics/useCases/createUsersComics/CreateUsersComicsController";
import { DeleteUsersComicsController } from "../modules/comics/useCases/deleteUsersComics/DeleteUsersComicsController";
import { ListUsersComicsByIdController } from "../modules/comics/useCases/listUsersComicsById/ListUsersComicsByIdController";

const usersComicsRoutes = Router();

const createUsersComicsController = new CreateUsersComicsController();
const listUsersComicsByIdController = new ListUsersComicsByIdController();
const deleteUsersComicsController = new DeleteUsersComicsController();
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

usersComicsRoutes.delete(
    "/",
    ensureAuthenticated,
    deleteUsersComicsController.handle
);

export { usersComicsRoutes };
