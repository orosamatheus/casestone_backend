import { Router } from "express";

import { ensureAuthenticated } from "../middlewares/ensureAuthenticated";
import { CreateUsersCharactersController } from "../modules/characters/useCases/createUsersCharacters/CreateUsersCharactersController";
import { DeleteUsersCharactersController } from "../modules/characters/useCases/deleteUsersCharacters/DeleteUsersCharactersController";
import { ListUsersCharactersByIdController } from "../modules/characters/useCases/listUsersCharactersById/ListUsersCharactersByIdController";

const usersCharactersRoutes = Router();

const createUsersCharactersController = new CreateUsersCharactersController();
const listUsersCharactersById = new ListUsersCharactersByIdController();
const deleteUsersCharactersController = new DeleteUsersCharactersController();

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

usersCharactersRoutes.delete(
    "/",
    ensureAuthenticated,
    deleteUsersCharactersController.handle
);

export { usersCharactersRoutes };
