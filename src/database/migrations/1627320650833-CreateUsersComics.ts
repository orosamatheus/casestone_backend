import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateUsersComics1627320650833 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_comics",

                columns: [
                    {
                        name: "id",
                        type: "int",
                        isGenerated: true,
                        isPrimary: true,
                        generationStrategy: "increment",
                    },
                    {
                        name: "comic_id",
                        type: "int",
                    },
                    {
                        name: "user_id",
                        type: "uuid",
                    },
                ],
            })
        );
        await queryRunner.createForeignKey(
            "users_comics",
            new TableForeignKey({
                name: "FKUsersComics",
                referencedTableName: "users",
                referencedColumnNames: ["id"],
                columnNames: ["user_id"],
                onDelete: "SET NULL",
                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey("users_comics", "FKUsersComics");
        await queryRunner.dropTable("users_comics");
    }
}
