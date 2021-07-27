import { Repository, getRepository } from "typeorm";

import { ICreateUserDTO } from "../../dto/ICreateUserDto";
import { User } from "../../entities/User";
import { IUsersRepository } from "../IUsersRepository";

class UsersRepository implements IUsersRepository {
    private repository: Repository<User>;

    constructor() {
        this.repository = getRepository(User);
    }

    async create({ name, email, password }: ICreateUserDTO): Promise<void> {
        const user = this.repository.create({ name, email, password });

        await this.repository.save(user);
    }
    async findByEmail(email: string): Promise<User> {
        const user = await this.repository.findOne({ email });

        return user;
    }
    async findById(id: string): Promise<User> {
        const user = await this.repository.findOne({ id });

        return user;
    }
    async update(
        id: string,
        { name, email, password }: ICreateUserDTO
    ): Promise<void> {
        const user = await this.repository.findOne({ id });

        user.name = name || user.name;
        user.email = email || user.email;
        user.password = password || user.password;

        await this.repository.save(user);
    }
}

export { UsersRepository };
