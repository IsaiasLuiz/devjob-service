import { Prop } from '@nestjs/mongoose';

export class ContactModel {

  @Prop()
  phone: string;

  @Prop({ required: true })
  mail: string;

  @Prop()
  whatsapp: string;

  @Prop()
  linkedin: string;

}
