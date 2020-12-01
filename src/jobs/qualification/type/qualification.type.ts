import { Job } from 'src/jobs/job/type/job.type';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Qualification {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 500, nullable: false })
  description: string;

  @ManyToOne(() => Job, (job) => job.qualifications)
  job: Job;
}
