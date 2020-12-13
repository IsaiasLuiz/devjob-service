import { Module } from '@nestjs/common';

import { MongooseModule } from '@nestjs/mongoose';

import { JobMapper } from './job/job.mapper';

import { JobResolver } from './job/job.resolver';

import { JobService } from './job/job.service';

import { JobModel, JobSchema } from './job/model/job.model';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: JobModel.name, schema: JobSchema }]),
  ],
  providers: [JobResolver, JobService, JobMapper],
})
export class JobModule {}
