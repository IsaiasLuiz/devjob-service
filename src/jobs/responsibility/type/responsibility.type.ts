import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Responsibility {

  @Field()
  description: string;

}
