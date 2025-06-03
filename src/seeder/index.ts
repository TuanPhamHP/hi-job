import { AppDataSource } from '../data-source';
import { Category } from '../entities/Category';
import { Job } from '../entities/Job';

const seed = async () => {
	await AppDataSource.initialize();

	const categoryRepo = AppDataSource.getRepository(Category);
	const jobRepo = AppDataSource.getRepository(Job);

	const categories = ['IT & Software', 'Marketing', 'Finance', 'Healthcare', 'Government & Public Sector'];

	const savedCategories: Category[] = [];

	for (const name of categories) {
		const cat = categoryRepo.create({ name });
		const saved = await categoryRepo.save(cat);
		savedCategories.push(saved);
	}

	const jobs = [
		{
			title: 'Frontend Developer',
			companyName: 'Google',
			location: 'California',
			salary: 120000,
			experienceLevel: 'Mid',
			category: savedCategories[0],
		},
		{
			title: 'Marketing Analyst',
			companyName: 'Unilever',
			location: 'London',
			salary: 80000,
			experienceLevel: 'Entry',
			category: savedCategories[1],
		},
		// Add more jobs here
	];

	for (const job of jobs) {
		const newJob = jobRepo.create(job);
		await jobRepo.save(newJob);
	}

	console.log('Seeder ran successfully');
	process.exit(0);
};

seed();
