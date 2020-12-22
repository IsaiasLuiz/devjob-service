import { Prop } from '@nestjs/mongoose';

export class BenefitModel {

  @Prop({ required: true })
  description: string;

  @Prop({ required: true })
  value: number;

}
