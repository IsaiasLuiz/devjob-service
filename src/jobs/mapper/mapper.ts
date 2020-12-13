export interface Mapper<M, T> {

  toModel(input: any): M;

  toType(model: M): T;

}
