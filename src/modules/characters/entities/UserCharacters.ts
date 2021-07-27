import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from "../../accounts/entities/User";

@Entity("users_characters")
class UserCharacters {
    @PrimaryColumn()
    id: number;

    @Column()
    character_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    @Column()
    user_id: string;
}

export { UserCharacters };
