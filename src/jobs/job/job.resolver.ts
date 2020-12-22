import { Resolver, Args, Int, Mutation } from '@nestjs/graphql';
import { Query } from '@nestjs/graphql';

import { Job } from './type/job.type';

import { JobService } from './job.service';

import { JobInput } from './input/job.input';

import { JobPage } from './type/job-page.type';

import { Pageable } from 'src/page/pageable';

import { Filter } from '../filter/filter';

@Resolver(() => Job)
export class JobResolver {

  constructor(private readonly jobService: JobService) {}

  @Query(() => JobPage)
  jobs(
    @Args('pageable', { nullable: true }) pageable: Pageable = new Pageable(),
    @Args('filter', { nullable: true }) filter: Filter,
  ): Promise<JobPage> {
    return this.jobService.getJobs(filter, pageable);
  }

  @Query(() => Job)
  job(@Args('id') id: string): Promise<Job> {
    return this.jobService.getJob(id);
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
