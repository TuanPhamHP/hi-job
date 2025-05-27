import { MigrationInterface, QueryRunner, Table } from "typeorm";

export class CreateJobTable1748351193117 implements MigrationInterface {
    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.createTable(new Table({
            name: 'jobs',
            columns: [
                {
                    name: 'id',
                    type: 'int',
                    isPrimary: true,
                    isGenerated: true,
                    generationStrategy: 'increment',
                },
                {
                    name: 'title',
                    type: 'varchar',
                    isNullable: false,
                },
                {
                    name: 'description',
                    type: 'text',
                    isNullable: true,
                },
            ]
        }))
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.dropTable('jobs');
    }

}

// up: function được chạy khi migrate:run
// down: function được chạy khi migrate:revert

// Ví dụ trong việc tạo 1 bảng
// => up: định nghĩa và tạo bảng: createTable()
// => down: drop table: dropTable()

// Giả sử db như sau: [job, category]
// migration: tạo bảng user

// => migration:run =>up() => [job, category, user]
// => migration:revert =>down() => [job, category]