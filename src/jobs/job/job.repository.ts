import { Injectable } from '@nestjs/common';
import { Job } from './type/job.type';

@Injectable()
export class JobRepository {
  getJobs(): Promise<Job> {
    return null;
  }
}
