import { JobInput } from './input/job.input';
import { Resolver, Args, Int, Mutation } from '@nestjs/graphql';
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

  @Mutation(() => Job)
  jobCreate(@Args('job') job: JobInput): Promise<Job> {
    return this.jobService.createJob(job);
  }

  @Mutation(() => Job)
  jobUpdate(@Args('id') id: string, @Args('job') job: JobInput): Promise<Job> {
    return this.jobService.updateJob(id, job);
  }

  @Mutation(() => Boolean)
  jobDelete(@Args('id') id: string): Promise<boolean> {
    return this.jobService.deleteJob(id);
  }

}
