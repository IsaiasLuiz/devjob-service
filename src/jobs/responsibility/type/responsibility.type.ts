import { Job } from 'src/jobs/job/type/job.type';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Responsibility {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 50, nullable: false })
  description: string;

  @ManyToOne(() => Job, (job) => job.responsibilities)
  job: Job;

}
