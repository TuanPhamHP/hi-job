import 'reflect-metadata';
import { AppDataSource } from './data-source';
import express from 'express';

const app = express();
const PORT = 3000;

app.use(express.json());
AppDataSource.initialize()
	.then(async () => {
		console.log('Connected to database');
		app.get('/', (req, res) => {
			res.send('🚀 Hello from TypeORM & Express!');
		});

		app.listen(PORT, () => {
			console.log(`🚀 Server is running at http://localhost:${PORT}`);
		});
	})
	.catch(error => console.log(error));
