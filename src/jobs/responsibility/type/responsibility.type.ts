import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Job } from 'src/jobs/job/type/job.type';

@ObjectType()
@Entity('responsibilities')
export class Responsibility {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 50, nullable: false })
  description: string;

  @ManyToOne(() => Job, (job) => job.responsibilities)
  job: Job;

}
