import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class RemunerationInput {

  @Field()
  description: string;

  @Field()
  value: number;

}
