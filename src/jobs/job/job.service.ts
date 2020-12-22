import { InjectModel } from '@nestjs/mongoose';

import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';

import { JobMapper } from './job.mapper';

import { JobModel, JobDocument } from './model/job.model';

import { JobInput } from './input/job.input';

import { Job } from 'src/jobs/job/type/job.type';

import { JobPage } from './type/job-page.type';

import { Pageable } from 'src/page/pageable';
import { Filter } from '../filter/filter';

@Injectable()
export class JobService {

  constructor(
    @InjectModel(JobModel.name) private jobModel: Model<JobDocument>,
    private jobMapper: JobMapper,
  ) {}

  async getJobs(filter: Filter, pageable: Pageable): Promise<JobPage> {
    let query = this.jobModel.find();

    if (filter) {
      if (filter?.title) {
        query = query.where({ title: { $regex: filter.title, $options: 'i' } });
      }
      if (filter?.seniority) {
        query = query.where({ seniority: filter.seniority });
      }
      if (filter?.tecnologies) {
        query = query.where({
          'tecnologies.name': {
            $in: [filter.tecnologies],
          },
        });
      }
      if (filter?.remuneration) {
        query = query.where({ remuneration: filter.remuneration });
      }
      if (filter?.isRemoteWork) {
        query = query.where({ isRemoteWork: filter.isRemoteWork });
      }
      if (filter?.vacancyType) {
        query = query.where({ vacancyType: filter.vacancyType });
      }
      if (filter?.companyName) {
        query = query.where({ 'companies.name': filter.companyName });
      }
      if (filter?.city) {
        query = query.where({ 'location.city': filter.city });
      }
      if (filter?.state) {
        query = query.where({ 'location.state': filter.state });
      }
    }

    const jobs: JobModel[] = await query
      .skip(pageable.page * pageable.size + pageable.offset)
      .limit(pageable.size)
      .exec();

    const page = new JobPage();
    page.jobs = jobs.map((j) => this.jobMapper.toType(j));
    pageable.totalElements = await query.count().exec();
    page.pageable = pageable;

    return page;
  }

  async getJob(id): Promise<Job> {
    const job: JobModel = await this.jobModel.findById(id).exec();
    return this.jobMapper.toType(job);
  }

  async createJob(job: JobInput): Promise<Job> {
    let createdJob = new this.jobModel(this.jobMapper.toModel(job));
    createdJob = await createdJob.save();
    return this.jobMapper.toType(createdJob);
  }

  async updateJob(id: string, job: JobInput): Promise<Job> {
    let updateJob = this.jobMapper.toModel(job);
    await this.jobModel.findByIdAndUpdate(id, updateJob).exec();
    updateJob = await this.jobModel.findById(id).exec();
    return this.jobMapper.toType(updateJob);
  }

  async deleteJob(id: string): Promise<boolean> {
    await this.jobModel.findByIdAndDelete(id).exec();
    const deleted = await this.jobModel.exists({ _id: id });
    return new Promise((resolve) => resolve(!deleted));
  }

}
