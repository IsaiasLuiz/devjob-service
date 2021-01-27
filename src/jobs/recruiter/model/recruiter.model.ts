import { Prop } from '@nestjs/mongoose';

export class RecruiterModel {

  @Prop({ required: true })
  recruiterId: string;

  @Prop({ required: true })
  name: string;

}
