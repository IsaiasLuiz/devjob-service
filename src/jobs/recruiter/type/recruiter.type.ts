import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Recruiter {

  @Field()
  recruiterId: string;

  @Field()
  name: string;
}
