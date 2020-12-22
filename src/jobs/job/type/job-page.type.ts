import { Field, ObjectType } from '@nestjs/graphql';

import { Job } from './job.type';

import { Pageable } from 'src/page/pageable';

@ObjectType()
export class JobPage {

  @Field(() => [Job])
  jobs: Job[];

  @Field(() => Pageable)
  pageable: Pageable;

}
