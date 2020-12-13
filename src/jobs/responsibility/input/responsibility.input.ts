import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ResponsibilityInput {

  @Field()
  description: string;

}
