import { Prop } from '@nestjs/mongoose';

export class CompanyValueModel {

  @Prop({ required: true })
  description: string;

}

export class CompanyModel {

  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  legacy: string;

  @Prop()
  values: CompanyValueModel[];

}
