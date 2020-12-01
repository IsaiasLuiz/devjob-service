import { Injectable } from '@nestjs/common';

import { getConnection } from 'typeorm';

import { Job } from 'src/jobs/job/type/job.type';

@Injectable()
export class JobService {
  getJobs(): Promise<Job[]> {
    const repository = getConnection().getRepository(Job);
    return repository.find();
  }
}
