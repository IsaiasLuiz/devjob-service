import { ObjectType, Field } from '@nestjs/graphql';

import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@ObjectType()
@Entity('contacts')
export class Contact {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 50 })
  phone: string;

  @Field()
  @Column({ length: 50 })
  mail: string;

  @Field()
  @Column({ length: 50 })
  whastapp: string;

  @Field()
  @Column({ length: 50 })
  linkedin: string;

}
