import {
    MigrationInterface,
    QueryRunner,
    Table,
    TableForeignKey,
} from "typeorm";

export class CreateUsersCharacters1627320685509 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(
            new Table({
                name: "users_characters",

                columns: [
                    {
                        name: "id",

                        type: "int",

                        isGenerated: true,

                        isPrimary: true,

                        generationStrategy: "increment",
                    },

                    {
                        name: "character_id",

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
            "users_characters",

            new TableForeignKey({
                name: "FKUsersCharacters",

                referencedTableName: "users",

                referencedColumnNames: ["id"],

                columnNames: ["user_id"],

                onDelete: "SET NULL",

                onUpdate: "SET NULL",
            })
        );
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey(
            "users_characters",
            "FKUsersCharacters"
        );

        await queryRunner.dropTable("users_comics");
    }
}
