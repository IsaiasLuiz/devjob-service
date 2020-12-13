import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Qualification {

  @Field()
  description: string;

}
