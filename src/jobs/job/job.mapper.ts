import { Injectable } from '@nestjs/common';

import { Mapper } from './../mapper/mapper';

import { JobInput } from './input/job.input';

import { Job } from 'src/jobs/job/type/job.type';
import { CompanyValue } from './../company/type/company.type';
import { Responsibility } from './../responsibility/type/responsibility.type';
import { Qualification } from './../qualification/type/qualification.type';

import { CompanyValueModel } from './../company/model/company.model';
import { BenefitModel } from './../remuneration/model/remuneration.model';
import { ResponsibilityModel } from './../responsibility/model/responsibility.model';
import { TechnologyModel } from './../technology/model/technology.model';
import { QualificationModel } from './../qualification/model/qualification.model';
import { JobModel } from './model/job.model';

@Injectable()
export class JobMapper implements Mapper<JobModel, Job> {

  toModel(input: JobInput): JobModel {
    if (!input) {
      throw new Error('Input is null');
    }

    const jobModel = new JobModel();

    jobModel.title = input.title;
    jobModel.description = input.description;
    jobModel.remuneration = input.remuneration;
    jobModel.isRemoteWork = input.isRemoteWork;
    jobModel.seniority = input.seniority;
    jobModel.vacancyType = input.vacancyType;
    jobModel.qualifications = input.qualifications.map((q) => {
      const qualification = new QualificationModel();
      qualification.description = q.description;
      return qualification;
    });
    jobModel.technologies = input.technologies.map((t) => {
      const technology = new TechnologyModel();
      technology.name = t.name;
      return technology;
    });
    jobModel.responsibilities = input.responsibilities.map((r) => {
      const responsibility = new ResponsibilityModel();
      responsibility.description = r.description;
      return responsibility;
    });
    jobModel.benefits = input.benefits.map((r) => {
      const remuneration = new BenefitModel();
      remuneration.description = r.description;
      remuneration.value = r.value;
      return remuneration;
    });
    jobModel.company.values = input.company.values.map((v) => {
      const value = new CompanyValueModel();
      value.description = v.description;
      return value;
    });
    jobModel.company.name = input.company.name;
    jobModel.company.legacy = input.company.legacy;
    jobModel.location.city = input.location.city;
    jobModel.location.state = input.location.state;
    jobModel.contact.phone = input.contact.phone;
    jobModel.contact.mail = input.contact.mail;
    jobModel.contact.linkedin = input.contact.linkedin;
    jobModel.contact.whatsapp = input.contact.whatsapp;
    jobModel.recruiter.name = input.recruiter.name;
    jobModel.recruiter.recruiterId = input.recruiter.recruiterId;

    return jobModel;
  }

  toType(model: JobModel): Job {
    if (!model) {
      throw new Error('Model is null');
    }

    const jobType = new Job();

    jobType.id = model.id;
    jobType.title = model.title;
    jobType.description = model.description;
    jobType.remuneration = model.remuneration;
    jobType.isRemoteWork = model.isRemoteWork;
    jobType.seniority = model.seniority;
    jobType.vacancyType = model.vacancyType;
    jobType.qualifications = model.qualifications.map((q) => {
      const qualification = new Qualification();
      qualification.description = q.description;
      return qualification;
    });
    jobType.technologies = model.technologies.map((t) => {
      const technology = new TechnologyModel();
      technology.name = t.name;
      return technology;
    });
    jobType.responsibilities = model.responsibilities.map((r) => {
      const responsibility = new Responsibility();
      responsibility.description = r.description;
      return responsibility;
    });
    jobType.benefits = model.benefits.map((r) => {
      const remuneration = new BenefitModel();
      remuneration.description = r.description;
      remuneration.value = r.value;
      return remuneration;
    });
    jobType.company.values = model.company.values.map((v) => {
      const value = new CompanyValue();
      value.description = v.description;
      return value;
    });
    jobType.company.name = model.company.name;
    jobType.company.legacy = model.company.legacy;
    jobType.location.city = model.location.city;
    jobType.location.state = model.location.state;
    jobType.contact.phone = model.contact.phone;
    jobType.contact.mail = model.contact.mail;
    jobType.contact.linkedin = model.contact.linkedin;
    jobType.contact.whatsapp = model.contact.whatsapp;
    jobType.recruiter.name = model.recruiter.name;
    jobType.recruiter.recruiterId = model.recruiter.recruiterId;

    jobType.createdAt = model.createdAt;
    jobType.updatedAt = model.updatedAt;

    return jobType;
  }

}
