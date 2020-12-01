import { Resolver, Args, Query } from '@nestjs/graphql';
import TesteModel from './teste';
@Resolver('teste')
export class Teste {
  @Query('allTestes')
  teste(@Args('teste') teste: TesteModel): Promise<any> {
    return new Promise((res) => {
      console.log(teste);
      return res({ a: teste.by });
    });
  }
}
