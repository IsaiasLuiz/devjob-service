import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Benefit {

  @Field()
  description: string;

  @Field()
  value: number;

}
