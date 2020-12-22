import { Prop } from '@nestjs/mongoose';

export class LocationModel {

  @Prop({ required: true })
  city: string;

  @Prop({ required: true })
  state: string;

}
