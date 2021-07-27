import { Router } from "express";

import { authenticateRoutes } from "./authenticate.routes";
import { usersRoutes } from "./users.routes";
import { usersCharactersRoutes } from "./usersCharacters.routes";

const router = Router();

router.use("/users", usersRoutes);
router.use("/users", authenticateRoutes);
router.use("/characters", usersCharactersRoutes);

export { router };
