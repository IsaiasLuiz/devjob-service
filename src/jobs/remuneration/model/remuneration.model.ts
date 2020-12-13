import { Prop } from '@nestjs/mongoose';

export class RemunerationModel {

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: number;

}
