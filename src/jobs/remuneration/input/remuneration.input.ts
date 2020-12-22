import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BenefitInput {

  @Field()
  description: string;

  @Field()
  value: number;

}
