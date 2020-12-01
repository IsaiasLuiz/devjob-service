import { Job } from 'src/jobs/job/type/job.type';
import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

@Entity()
export class Technology {

  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Column({ length: 100, nullable: false })
  name: string;

  @Column({ length: 50, nullable: false })
  timeExperience: string;

  @Column({ length: 500, nullable: false })
  description: string;

  @ManyToOne(() => Job, (job) => job.technologies)
  job: Job;

}
