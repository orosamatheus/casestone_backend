import {
    Column,
    CreateDateColumn,
    Entity,
    OneToMany,
    PrimaryColumn,
} from "typeorm";
import { v4 as uuidV4 } from "uuid";

import { UserCharacters } from "../../characters/entities/UserCharacters";
import { UserComics } from "../../comics/entities/UserComics";

@Entity("users")
class User {
    @PrimaryColumn()
    id: string;

    @Column()
    name: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @CreateDateColumn()
    created_at: Date;

    @OneToMany(
        () => UserCharacters,
        (users_characters) => users_characters.user_id
    )
    users_characters: UserCharacters[];

    @OneToMany(() => UserComics, (user_comics) => user_comics.user_id)
    users_comics: UserComics[];

    constructor() {
        if (!this.id) {
            this.id = uuidV4();
        }
    }
}

export { User };
