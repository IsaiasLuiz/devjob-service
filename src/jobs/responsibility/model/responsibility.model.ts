import { Prop } from '@nestjs/mongoose';

export class ResponsibilityModel {

  @Prop({ required: true })
  description: string;

}
