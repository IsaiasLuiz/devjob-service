import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Location {

  @Field()
  city: string;

  @Field()
  state: string;

}
