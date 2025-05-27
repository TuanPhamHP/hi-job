import { AppDataSource } from '../data-source';
import { Category } from '../entities/Category';
import { Job } from '../entities/Job';

async function seed() {
	await AppDataSource.initialize();

	console.log('Database connected. Seeding data...');

	// Tạo một số Category
	const categories = [
		{ name: 'IT', description: 'Công nghệ thông tin' },
		{ name: 'Marketing', description: 'Tiếp thị' },
		{ name: 'Finance', description: 'Tài chính' },
	].map(data => {
		const category = new Category();
		Object.assign(category, data);
		return category;
	});

	await AppDataSource.manager.save(categories);
	console.log('Seeded categories');

	// Tạo một số Job
	const jobs = [
		{
			title: 'Frontend Developer',
			companyName: 'OpenAI',
			location: 'Remote',
			salary: 2000,
			experienceLevel: 'Junior',
			category: categories[0],
		},
		{
			title: 'Digital Marketing Specialist',
			companyName: 'Meta',
			location: 'HCM',
			salary: 1500,
			experienceLevel: 'Mid',
			category: categories[1],
		},
	].map(data => {
		const job = new Job();
		Object.assign(job, data);
		return job;
	});

	await AppDataSource.manager.save(jobs);
	console.log('Seeded jobs');

	await AppDataSource.destroy();
	console.log('Seeding complete.');
}

seed().catch(err => {
	console.error('Seeding error:', err);
});
