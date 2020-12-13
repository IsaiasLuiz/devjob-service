import { Prop } from '@nestjs/mongoose';

export class TechnologyModel {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  timeExperience: string;

  @Prop({ required: true })
  description: string;

}
