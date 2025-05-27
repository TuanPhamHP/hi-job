import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class AddColumnsJobTable1748352589647 implements MigrationInterface {

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.addColumns('jobs', [
            new TableColumn({
                name: 'companyName',
                type: 'varchar',
                isNullable: false
            }),
            new TableColumn({
                name: 'location',
                type: 'varchar',
                isNullable: false
            }),
            new TableColumn({
                name: 'salary',
                type: 'decimal',
                isNullable: false
            }),
            new TableColumn({
                name: 'experienceLevel',
                type: 'varchar',
                isNullable: false
            })
        ])
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropColumns('jobs', ['companyName', 'location', 'salary', 'experienceLevel'])
    }

}
