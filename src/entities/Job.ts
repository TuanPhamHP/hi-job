import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity('jobs')
export class Job {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    title!: string;

    @Column()
    description!: string;

    @Column()
    companyName!: string;

    @Column()
    location!: string;

    @Column({ nullable: true })
    salary!: number;

    @Column()
    experienceLevel!: string;
}

// Tạo Entity cho Category
// Tạo seeder để seed 6 categories, mỗi categories lại có 5 jobs