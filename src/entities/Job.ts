import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';
import { Category } from './Category';

@Entity('jobs')
export class Job {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	title!: string;

	@Column()
	companyName!: string;

	@Column()
	location!: string;

	@Column({ nullable: true })
	salary!: number;

	@Column()
	experienceLevel!: string;

	@ManyToOne(() => Category, category => category.jobs)
	category!: Category;
}
