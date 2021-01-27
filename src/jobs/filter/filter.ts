import { Field, InputType } from '@nestjs/graphql';
import { VacancyEnum } from '../vacancy-type/VacancyType';

@InputType()
export class Filter {

  @Field({ nullable: true })
  title: string;

  @Field({ nullable: true })
  seniority: string;

  @Field(() => [String], { nullable: true })
  tecnologies: [string];

  @Field({ nullable: true })
  remuneration: number;

  @Field({ nullable: true })
  isRemoteWork: boolean;

  @Field(() => VacancyEnum, { nullable: true })
  vacancyType: VacancyEnum;

  @Field({ nullable: true })
  companyName: string;

  @Field({ nullable: true })
  city: string;

  @Field({ nullable: true })
  state: string;

  @Field({ nullable: true })
  recruiterId: string;

}
