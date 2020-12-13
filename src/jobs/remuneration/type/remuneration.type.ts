import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Remuneration {

  @Field()
  description: string;

  @Field()
  value: number;

}
