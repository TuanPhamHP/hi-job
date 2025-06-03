import { Router, Request, Response } from 'express';
import { AppDataSource } from '../data-source';
import { Category } from '../entities/Category';
import { Like } from 'typeorm';

const router = Router();

router.get('/', async (req: Request, res: Response) => {
	try {
		const name = req.query.name as string;

		const categoryRepo = AppDataSource.getRepository(Category);

		if (name) {
			const categories = await categoryRepo.find({
				where: { name: Like(`%${name}%`) },
			});
			return res.json(categories);
		}

		const all = await categoryRepo.find();
		return res.json(all);
	} catch (error) {
		console.error(error);
		return res.status(500).json({ message: 'Something went wrong' });
	}
});

export default router;
