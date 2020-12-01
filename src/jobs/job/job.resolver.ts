import { Resolver, Args, Int } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

import { JobService } from './job.service';
import { Job } from './type/job.type';

@Resolver(() => Job)
export class JobResolver {

  constructor(private readonly jobService: JobService) {}

  @Query(() => [Job])
  jobs(): Promise<Job[]> {
    return this.jobService.getJobs();
  }

}
