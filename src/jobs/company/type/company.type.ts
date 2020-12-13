import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Company {

  @Field()
  name: string;

  @Field()
  legacy: string;

  @Field(() => [CompanyValue])
  values: CompanyValue[];

}

@ObjectType()
export class CompanyValue {

  @Field()
  description: string;

  company: Company;

}
