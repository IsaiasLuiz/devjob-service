import { Prop } from '@nestjs/mongoose';

export class RecruiterModel {

  @Prop({ required: true })
  name: string;

}
