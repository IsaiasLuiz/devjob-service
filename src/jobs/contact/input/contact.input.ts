import { Field, InputType } from '@nestjs/graphql';

@InputType()
export class ContactInput {

  @Field({ nullable: true })
  phone: string;

  @Field()
  mail: string;

  @Field({ nullable: true })
  whatsapp: string;

  @Field({ nullable: true })
  linkedin: string;

}
