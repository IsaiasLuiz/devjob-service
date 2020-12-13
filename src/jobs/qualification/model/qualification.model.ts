import { Prop } from '@nestjs/mongoose';

export class QualificationModel {

  @Prop({ required: true })
  description: string;

}
