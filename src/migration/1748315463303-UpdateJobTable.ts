import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class UpdateJobTable1748315463303 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumns('jobs', [
			new TableColumn({
				name: 'title',
				type: 'text',
				isNullable: false, // Cho phép null nếu bạn chưa có dữ liệu
			}),
			new TableColumn({
				name: 'companyName',
				type: 'text',
				isNullable: false,
			}),
			new TableColumn({
				name: 'location',
				type: 'text',
				isNullable: false,
			}),
			new TableColumn({
				name: 'salary',
				type: 'float',
				isNullable: false,
			}),
			new TableColumn({
				name: 'experienceLevel',
				type: 'varchar',
				isNullable: false,
			}),
		]);
		await queryRunner.dropColumn('jobs', 'name');
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		await queryRunner.addColumn(
			'jobs',
			new TableColumn({
				name: 'name',
				type: 'varchar', // giả định cũ là varchar
				isNullable: false,
			})
		);

		// Xóa các cột đã thêm trong hàm up (ngược lại thứ tự để tránh lỗi phụ thuộc)
		await queryRunner.dropColumn('jobs', 'experienceLevel');
		await queryRunner.dropColumn('jobs', 'salary');
		await queryRunner.dropColumn('jobs', 'location');
		await queryRunner.dropColumn('jobs', 'companyName');
		await queryRunner.dropColumn('jobs', 'title');
	}
}
