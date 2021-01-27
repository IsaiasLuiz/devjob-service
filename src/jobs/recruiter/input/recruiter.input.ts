import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RecruiterInput {

  @Field()
  recruiterId: string;

  @Field()
  name: string;
}
