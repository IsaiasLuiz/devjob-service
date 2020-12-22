import { Field, InputType } from '@nestjs/graphql';

import { RecruiterInput } from './../../recruiter/input/recruiter.input';
import { ContactInput } from './../../contact/input/contact.input';
import { LocationInput } from './../../location/input/location.input';
import { BenefitInput } from './../../remuneration/input/remuneration.input';
import { CompanyInput } from './../../company/input/company.input';
import { ResponsibilityInput } from './../../responsibility/input/responsibility.input';
import { TechnologyInput } from './../../technology/input/technology.input';
import { QualificationInput } from './../../qualification/input/qualification.input';
import { VacancyEnum } from '../../vacancy-type/VacancyType';

@InputType()
export class JobInput {

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

  @Field(() => [QualificationInput])
  qualifications: [QualificationInput];

  @Field(() => [TechnologyInput])
  technologies: [TechnologyInput];

  @Field(() => [ResponsibilityInput])
  responsibilities: [ResponsibilityInput];

  @Field(() => CompanyInput)
  company: CompanyInput;

  @Field(() => [BenefitInput])
  benefits: [BenefitInput];

  @Field(() => LocationInput)
  location: LocationInput;

  @Field(() => ContactInput)
  contact: ContactInput;

  @Field(() => RecruiterInput)
  recruiter: RecruiterInput;

}
