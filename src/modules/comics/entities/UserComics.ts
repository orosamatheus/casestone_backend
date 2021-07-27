import { Column, Entity, JoinColumn, ManyToOne, PrimaryColumn } from "typeorm";

import { User } from "../../accounts/entities/User";

@Entity("users_comics")
class UserComics {
    @PrimaryColumn()
    id: number;

    @Column()
    comic_id: number;

    @ManyToOne(() => User)
    @JoinColumn({ name: "user_id" })
    user: User;

    user_id: string;
}

export { UserComics };