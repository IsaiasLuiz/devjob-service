import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('locations')
export class Location {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 50 })
  city: string;

  @Field()
  @Column({ length: 50 })
  state: string;

  @Field()
  @Column()
  isRemoteWork: boolean;

}
