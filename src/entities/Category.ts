import { Entity, PrimaryGeneratedColumn, Column, ManyToOne, OneToMany } from 'typeorm';
import { Job } from './Job';

@Entity('categories')
export class Category {
	@PrimaryGeneratedColumn()
	id!: number;

	@Column()
	name!: string;

	@Column()
	description!: string;

	@OneToMany(() => Job, job => job.category)
	jobs!: Job[];
}
