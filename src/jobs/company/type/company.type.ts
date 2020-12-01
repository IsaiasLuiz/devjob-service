import { ObjectType, Field } from '@nestjs/graphql';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  ManyToOne,
  OneToMany,
} from 'typeorm';

@ObjectType()
@Entity('companies')
export class Company {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 100, nullable: false })
  name: string;

  @Field()
  @Column({ length: 500, nullable: false })
  legacy: string;

  @Field(() => [CompanyValue])
  @OneToMany(() => CompanyValue, (value) => value.company)
  values: [CompanyValue];

}

@ObjectType()
@Entity('company_values')
export class CompanyValue {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 500, nullable: false })
  description: string;

  @ManyToOne(() => Company, (company) => company.values)
  company: Company;

}
