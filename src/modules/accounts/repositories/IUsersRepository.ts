import { ICreateUserDTO } from "../dto/ICreateUserDto";
import { User } from "../entities/User";

interface IUsersRepository {
    create({ name, email, password }: ICreateUserDTO): Promise<void>;
    findByEmail(email: string): Promise<User>;
    findById(id: string): Promise<User>;
    update(
        id: string,
        { name, email, password }: ICreateUserDTO
    ): Promise<void>;
}

export { IUsersRepository };
