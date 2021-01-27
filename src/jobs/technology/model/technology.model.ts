import { Prop } from '@nestjs/mongoose';

export class TechnologyModel {

  @Prop({ required: true })
  name: string;

}
