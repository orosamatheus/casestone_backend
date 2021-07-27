import { hash } from "bcrypt";
import { inject, injectable } from "tsyringe";

import { AppError } from "../../../../errors/AppError";
import { IUpdateUserDTO } from "../../dto/IUpdateUserDto";
import { IUsersRepository } from "../../repositories/IUsersRepository";

@injectable()
class UpdateUserUseCase {
    constructor(
        @inject("UsersRepository")
        private usersRepository: IUsersRepository
    ) {}

    async execute(
        id: string,
        { name, email, password, passwordConfirm }: IUpdateUserDTO
    ): Promise<void> {
        const userExists = await this.usersRepository.findById(id);

        if (password !== passwordConfirm) {
            throw new AppError("Password error");
        }

        if (!userExists) {
            throw new AppError("User does not Exists");
        }

        const passwordHash = await hash(password, 8);

        await this.usersRepository.update(id, {
            name,
            email,
            password: passwordHash,
        });
    }
}
export { UpdateUserUseCase };
