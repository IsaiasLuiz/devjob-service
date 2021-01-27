import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class TechnologyInput {

  @Field()
  name: string;

}
