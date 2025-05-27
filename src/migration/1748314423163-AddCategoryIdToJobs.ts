import { MigrationInterface, QueryRunner, TableColumn, TableForeignKey } from 'typeorm';

export class AddCategoryIdToJobs1748314423163 implements MigrationInterface {
	public async up(queryRunner: QueryRunner): Promise<void> {
		// 1. Thêm cột categoryId vào bảng jobs
		await queryRunner.addColumn(
			'jobs',
			new TableColumn({
				name: 'categoryId',
				type: 'int',
				isNullable: true, // Cho phép null nếu bạn chưa có dữ liệu
			})
		);

		// 2. Tạo khóa ngoại từ jobs.categoryId → categories.id
		await queryRunner.createForeignKey(
			'jobs',
			new TableForeignKey({
				columnNames: ['categoryId'],
				referencedTableName: 'categories',
				referencedColumnNames: ['id'],
				onDelete: 'SET NULL', // hoặc CASCADE tùy bạn
			})
		);
	}

	public async down(queryRunner: QueryRunner): Promise<void> {
		// 1. Tìm FK trước
		const table = await queryRunner.getTable('jobs');
		const foreignKey = table?.foreignKeys.find(fk => fk.columnNames.includes('categoryId'));

		// 2. Xóa FK và cột
		if (foreignKey) {
			await queryRunner.dropForeignKey('jobs', foreignKey);
		}

		await queryRunner.dropColumn('jobs', 'categoryId');
	}
}
