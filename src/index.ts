import 'reflect-metadata';
import { AppDataSource } from './data-source';
import express from 'express';
import jobRoute from './api/job.route';
import categoryRoute from './api/category.route';

const app = express();
const PORT = 3000;

app.use(express.json());
AppDataSource.initialize()
	.then(async () => {
		console.log('Connected to database');
		app.get('/', (req, res) => {
			res.send('🚀 Hello from TypeORM & Express!');
		});

		app.use(express.json());

		app.use('/api/jobs', jobRoute);
		app.use('/api/categories', categoryRoute);

		app.listen(PORT, () => {
			console.log(`🚀 Server is running at http://localhost:${PORT}`);
		});
	})
	.catch(error => console.log(error));
