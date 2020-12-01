import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Job } from 'src/jobs/job/type/job.type';

@ObjectType()
@Entity('qualifications')
export class Qualification {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 500, nullable: false })
  description: string;

  @ManyToOne(() => Job, (job) => job.qualifications)
  job: Job;
}
