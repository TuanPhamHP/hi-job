import { Entity, PrimaryGeneratedColumn, Column, OneToMany } from 'typeorm';
import { Job } from './Job';

@Entity('categories')
export class Category {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@OneToMany(() => Job, job => job.category)
	jobs!: Job[];
}
