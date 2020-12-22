import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class LocationInput {

  @Field()
  city: string;

  @Field()
  state: string;

}
