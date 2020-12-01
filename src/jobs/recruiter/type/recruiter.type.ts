import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('recruiters')
export class Recruiter {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 50, nullable: false })
  name: string;
}
