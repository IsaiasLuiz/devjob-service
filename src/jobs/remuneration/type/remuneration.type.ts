import { Job } from 'src/jobs/job/type/job.type';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Remuneration {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 500, nullable: false })
  description: string;

  @Column({ nullable: false })
  value: number;

  @ManyToOne(() => Job, (job) => job.remunerations)
  job: Job;
}
