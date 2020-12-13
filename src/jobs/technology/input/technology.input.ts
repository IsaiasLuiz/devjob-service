import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TechnologyInput {

  @Field()
  name: string;

  @Field()
  timeExperience: string;

  @Field()
  description: string;

}
