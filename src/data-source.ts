import 'reflect-metadata';
import { DataSource } from 'typeorm';
import 'dotenv/config';

console.log(process.env.DB_PASSWORD);

export const AppDataSource = new DataSource({
	type: 'postgres',
	host: process.env.DB_HOST,
	port: 5432,
	username: process.env.DB_USERNAME,
	password: process.env.DB_PASSWORD,
	database: process.env.DB_NAME,
	synchronize: true,
	logging: true,
	entities: [],
	subscribers: [],
	migrations: [],
});
