import { Router } from "express";

import { CreateUserController } from "../modules/accounts/useCases/createUser/CreateUserController";
import { UpdateUserController } from "../modules/accounts/useCases/updateUser/UpdateUserController";

const usersRoutes = Router();

const createUserController = new CreateUserController();
const updateUserController = new UpdateUserController();

usersRoutes.post("/signup", createUserController.handle);
usersRoutes.put("/update/:id", updateUserController.handle);

export { usersRoutes };
