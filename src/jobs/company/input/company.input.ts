import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class CompanyInput {

  @Field()
  name: string;

  @Field()
  legacy: string;

  @Field(() => [CompanyValueInput])
  values: [CompanyValueInput];

}

@InputType()
export class CompanyValueInput {

  @Field()
  description: string;

}
