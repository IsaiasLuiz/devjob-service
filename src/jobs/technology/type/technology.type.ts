import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Technology {

  @Field()
  name: string;

}
