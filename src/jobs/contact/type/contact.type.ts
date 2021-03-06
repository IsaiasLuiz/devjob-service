import { ObjectType, Field } from '@nestjs/graphql';

@ObjectType()
export class Contact {

  @Field({ nullable: true })
  phone: string;

  @Field()
  mail: string;

  @Field({ nullable: true })
  whatsapp: string;

  @Field({ nullable: true })
  linkedin?: string;

}
