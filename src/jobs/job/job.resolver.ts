import { Job } from './type/job.type';
import { Resolver, Args } from '@nestjs/graphql';

@Resolver('jobs')
export class JobResolver {
  jobs(): Promise<Job> {
    return null;
  }
}
