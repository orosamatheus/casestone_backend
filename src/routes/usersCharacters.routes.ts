import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUsersCharactersController } from "../modules/characters/useCases/createUsersCharacters/CreateUsersCharactersController";
import { ListUsersCharactersByIdController } from "../modules/characters/useCases/listUsersCharactersById/ListUsersCharactersByIdController";

const usersCharactersRoutes = Router();

const createUsersCharactersController = new CreateUsersCharactersController();
const listUsersCharactersById = new ListUsersCharactersByIdController();

usersCharactersRoutes.post(
    "/",
    ensureAuthenticated,
    createUsersCharactersController.handle
);

usersCharactersRoutes.get(
    "/",
    ensureAuthenticated,
    listUsersCharactersById.handle
);

export { usersCharactersRoutes };
