interface IUpdateUserDTO {
    name?: string;
    email?: string;
    password: string;
    passwordConfirm: string;
}

export { IUpdateUserDTO };
