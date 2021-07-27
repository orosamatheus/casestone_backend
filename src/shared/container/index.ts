import { container } from "tsyringe";

// Users
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
// users_characters
import { UsersCharactersRepository } from "../../modules/characters/repositories/implementations/UsersCharactersRepository";
import { IUsersCharactersRepository } from "../../modules/characters/repositories/IUsersCharactersRepository";
// users_comics
import { UsersComicsRepository } from "../../modules/comics/repositories/implementations/UsersComicsRepository";
import { IUsersComicsRepository } from "../../modules/comics/repositories/IUsersComicsRepository";

container.registerSingleton<IUsersRepository>(
    "UsersRepository",
    UsersRepository
);

container.registerSingleton<IUsersCharactersRepository>(
    "UsersCharactersRepository",
    UsersCharactersRepository
);

container.registerSingleton<IUsersComicsRepository>(
    "UsersComicsRepository",
    UsersComicsRepository
);
