import { ObjectType, Field } from '@nestjs/graphql';

import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  OneToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from 'typeorm';

import { Location } from './../../location/type/location.type';
import { Company } from './../../company/type/company.type';
import { Recruiter } from './../../recruiter/type/recruiter.type';
import { Contact } from './../../contact/type/contact.type';
import { Remuneration } from './../../remuneration/type/remuneration.type';
import { Responsibility } from './../../responsibility/type/responsibility.type';
import { Technology } from './../../technology/type/technology.type';
import { Qualification } from './../../qualification/type/qualification.type';

@ObjectType()
@Entity('jobs')
export class Job {

  @Field()
  @PrimaryGeneratedColumn('rowid')
  id: number;

  @Field()
  @Column({ length: 100, nullable: false })
  title: string;

  @Field()
  @Column({ length: 500, nullable: false })
  description: string;

  @Field(() => [Qualification])
  @OneToMany(() => Qualification, (qualification) => qualification.job)
  qualifications: [Qualification];

  @Field(() => [Technology])
  @OneToMany(() => Technology, (technology) => technology.job)
  technologies: [Technology];

  @Field(() => [Responsibility])
  @OneToMany(() => Responsibility, (responsibility) => responsibility.job)
  responsibilities: [Responsibility];

  @Field(() => Company)
  @OneToOne(() => Company)
  @JoinColumn()
  company: Company;

  @Field(() => [Remuneration])
  @OneToMany(() => Remuneration, (remuneration) => remuneration.job)
  remunerations: [Remuneration];

  @Field(() => Location)
  @OneToOne(() => Location)
  @JoinColumn()
  location: Location;

  @Field(() => Contact)
  @OneToOne(() => Contact)
  contact: Contact;

  @Field(() => Recruiter)
  @OneToOne(() => Recruiter)
  recruiter: Recruiter;

  @Field()
  @Column('created_at')
  @CreateDateColumn()
  createdAt: Date;

  @Field()
  @Column('updated_at')
  @UpdateDateColumn()
  updatedAt: Date;
}
