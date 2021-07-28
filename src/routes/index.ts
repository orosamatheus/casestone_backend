import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { marvelRoutes } from "./marvel.routes";
import { usersRoutes } from "./users.routes";
import { usersCharactersRoutes } from "./usersCharacters.routes";
import { usersComicsRoutes } from "./usersComics.routes";

const router = Router();

router.use("/marvel", marvelRoutes);
router.use("/users", usersRoutes);
router.use("/users", authenticateRoutes);
router.use("/characters", usersCharactersRoutes);
router.use("/comics", usersComicsRoutes);

export { router };
