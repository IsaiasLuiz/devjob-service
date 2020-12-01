import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Job } from 'src/jobs/job/type/job.type';

@ObjectType()
@Entity('remunerations')
export class Remuneration {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 500, nullable: false })
  description: string;

  @Field()
  @Column({ nullable: false })
  value: number;

  @ManyToOne(() => Job, (job) => job.remunerations)
  job: Job;
}
