import { registerEnumType } from '@nestjs/graphql';

export enum VacancyEnum {
  CLT = 'CLT',
  PJ = 'PJ',
}

registerEnumType(VacancyEnum, { name: 'VacancyEnum' });
