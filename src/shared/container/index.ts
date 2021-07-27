import { container } from "tsyringe";

// Users
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
// users_characters
import { UsersCharactersRepository } from "../../modules/characters/repositories/implementations/UsersCharactersRepository";
import { IUsersCharactersRepository } from "../../modules/characters/repositories/IUsersCharactersRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IUsersCharactersRepository>(
    "UsersCharactersRepository",
    UsersCharactersRepository
);
