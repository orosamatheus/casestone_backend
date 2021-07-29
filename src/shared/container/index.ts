import { container } from "tsyringe";

// Users
import { UsersRepository } from "../../modules/accounts/repositories/implementations/UsersRepository";
import { IUsersRepository } from "../../modules/accounts/repositories/IUsersRepository";
// users_characters
import { ICharactersProvider } from "../../modules/characters/providers/ICharactersProvider";
import { CharactersProvider } from "../../modules/characters/providers/implementations/CharactersProvider";
import { UsersCharactersRepository } from "../../modules/characters/repositories/implementations/UsersCharactersRepository";
import { IUsersCharactersRepository } from "../../modules/characters/repositories/IUsersCharactersRepository";
// users_comics
import { IComicsProvider } from "../../modules/comics/providers/iComicsProvider";
import { ComicsProvider } from "../../modules/comics/providers/implementations/ComicsProvider";
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

container.registerSingleton<IComicsProvider>("ComicsProvider", ComicsProvider);

container.registerSingleton<ICharactersProvider>(
    "CharactersProvider",
    CharactersProvider
);
