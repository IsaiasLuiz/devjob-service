import { InjectModel } from '@nestjs/mongoose';
import { Injectable } from '@nestjs/common';

import { Model } from 'mongoose';

import { JobMapper } from './job.mapper';

import { JobModel, JobDocument } from './model/job.model';

import { JobInput } from './input/job.input';

import { Job } from 'src/jobs/job/type/job.type';

@Injectable()
export class JobService {

  constructor(
    @InjectModel(JobModel.name) private jobModel: Model<JobDocument>,
    private jobMapper: JobMapper,
  ) {}

  async getJobs(): Promise<Job[]> {
    const jobs: JobModel[] = await this.jobModel.find().exec();
    return jobs.map((j) => this.jobMapper.toType(j));
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
