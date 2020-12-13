import { Field, InputType } from '@nestjs/graphql';

import { Job } from 'src/jobs/job/type/job.type';

@InputType()
export class QualificationInput {

  @Field()
  description: string;

}
