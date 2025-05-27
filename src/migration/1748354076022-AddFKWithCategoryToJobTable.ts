import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from "typeorm";

export class AddFKWithCategoryToJobTable1748354076022 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumn('jobs', new TableColumn({
            name:'categoryId',
            type: 'int',
            isNullable: false
        }))

        await queryRunner.createForeignKey('jobs', new TableForeignKey({
            columnNames: ['categoryId'],
            referencedTableName:'categories',
            referencedColumnNames: ['id'],
            onDelete: 'CASCADE'
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropForeignKey('jobs','categoryId');
        await queryRunner.dropColumn('jobs','categoryId');
    }

}
