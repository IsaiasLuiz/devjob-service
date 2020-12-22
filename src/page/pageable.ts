import { Field, InputType, ObjectType } from '@nestjs/graphql';

@InputType()
@ObjectType('Page')
export class Pageable {

  @Field({ nullable: true, defaultValue: 0 })
  page: number;

  @Field({ nullable: true, defaultValue: 10 })
  size: number;

  @Field({ nullable: true, defaultValue: 0 })
  offset: number;

  @Field({ nullable: true })
  totalElements: number;

  constructor(page = 0, size = 10, offset = 0) {
    this.page = page;
    this.size = size;
    this.offset = offset;
  }

}
