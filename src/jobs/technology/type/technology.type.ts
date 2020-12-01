import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from 'typeorm';

import { Job } from 'src/jobs/job/type/job.type';

@ObjectType()
@Entity('tecnologies')
export class Technology {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 100, nullable: false })
  name: string;

  @Field()
  @Column({ length: 50, nullable: false })
  timeExperience: string;

  @Field()
  @Column({ length: 500, nullable: false })
  description: string;

  @ManyToOne(() => Job, (job) => job.technologies)
  job: Job;

}
