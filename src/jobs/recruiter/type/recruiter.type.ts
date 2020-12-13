import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Recruiter {

  @Field()
  name: string;
}
