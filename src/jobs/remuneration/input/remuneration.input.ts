import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class BenefitInput {

  @Field()
  description: string;

  @Field({ nullable: true })
  value: number;

}
