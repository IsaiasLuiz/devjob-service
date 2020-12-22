import { ObjectType, Field, ID } from '@nestjs/graphql';

import { Location } from './../../location/type/location.type';
import { Company } from './../../company/type/company.type';
import { Recruiter } from './../../recruiter/type/recruiter.type';
import { Contact } from './../../contact/type/contact.type';
import { Benefit } from './../../remuneration/type/remuneration.type';
import { Responsibility } from './../../responsibility/type/responsibility.type';
import { Technology } from './../../technology/type/technology.type';
import { Qualification } from './../../qualification/type/qualification.type';
import { VacancyEnum } from '../../vacancy-type/VacancyType';

@ObjectType()
export class Job {

  constructor() {
    this.company = new Company();
    this.location = new Location();
    this.contact = new Contact();
    this.recruiter = new Recruiter();
  }

  @Field(() => ID)
  id: string;

  @Field()
  title: string;

  @Field()
  description: string;

  @Field()
  remuneration: number;

  @Field()
  isRemoteWork: boolean;

  @Field()
  seniority: string;

  @Field(type => VacancyEnum)
  vacancyType: VacancyEnum;

  @Field(() => [Qualification])
  qualifications: Qualification[];

  @Field(() => [Technology])
  technologies: Technology[];

  @Field(() => [Responsibility])
  responsibilities: Responsibility[];

  @Field(() => Company)
  company: Company;

  @Field(() => [Benefit])
  benefits: Benefit[];

  @Field(() => Location)
  location: Location;

  @Field(() => Contact)
  contact: Contact;

  @Field(() => Recruiter)
  recruiter: Recruiter;

  @Field()
  createdAt: Date;

  @Field()
  updatedAt: Date;
}
