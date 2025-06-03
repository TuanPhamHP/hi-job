import { Router } from 'express';
import { AppDataSource } from '../data-source';
import { Job } from '../entities/Job';

const router = Router();

router.get('/', async (req, res) => {
	const jobRepo = AppDataSource.getRepository(Job);
	const jobs = await jobRepo.find({
		relations: ['category'],
	});
	res.json(jobs);
});

export default router;
