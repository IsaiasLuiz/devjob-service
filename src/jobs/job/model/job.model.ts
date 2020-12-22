import { SchemaFactory, Schema, Prop } from '@nestjs/mongoose';

import { Document } from 'mongoose';

import { RecruiterModel } from './../../recruiter/model/recruiter.model';
import { ContactModel } from './../../contact/model/contact.model';
import { LocationModel } from './../../location/model/location.model';
import { CompanyModel } from './../../company/model/company.model';
import { BenefitModel } from './../../remuneration/model/remuneration.model';
import { ResponsibilityModel } from './../../responsibility/model/responsibility.model';
import { TechnologyModel } from './../../technology/model/technology.model';
import { QualificationModel } from './../../qualification/model/qualification.model';
import { VacancyEnum } from '../../vacancy-type/VacancyType';

export type JobDocument = JobModel & Document;

@Schema({ timestamps: true, autoIndex: true })
export class JobModel {

  constructor() {
    this.company = new CompanyModel();
    this.location = new LocationModel();
    this.contact = new ContactModel();
    this.recruiter = new RecruiterModel();
  }

  id: string;

  @Prop({ required: true })
  title: string;

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  remuneration: number;

  @Prop()
  isRemoteWork: boolean;

  @Prop()
  seniority: string;

  @Prop({ required: true })
  vacancyType: VacancyEnum;

  @Prop()
  qualifications: QualificationModel[];

  @Prop()
  technologies: TechnologyModel[];

  @Prop()
  responsibilities: ResponsibilityModel[];

  @Prop()
  company: CompanyModel;

  @Prop()
  benefits: BenefitModel[];

  @Prop()
  location: LocationModel;

  @Prop()
  contact: ContactModel;

  @Prop()
  recruiter: RecruiterModel;

  @Prop()
  createdAt: Date;

  @Prop()
  updatedAt: Date;
}

export const JobSchema = SchemaFactory.createForClass(JobModel);
