import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';
import { Job } from './entities/Job';

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: false,
	logging: true,
	entities: [Job],
	subscribers: [],
	migrations: ['src/migration/*.ts'],
});

// ENTITIES: KHÔNG DÙNG ĐỂ DEFINE DATABASE CHỈ DÙNG ĐỂ ĐẠI DIỆN CHO 1 TABLE ĐỂ SỬ DỤNG ORM
// MIGRATIONS: ĐỒNG NHẤT DATABASE, TRÁNH VIỆC UPDATE DATABASE KHÔNG ĐỒNG NHẤT.
