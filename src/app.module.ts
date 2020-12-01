import { Teste } from './teste.resolver';
import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';

import { GraphQLModule } from '@nestjs/graphql';
import { TypeOrmModule } from '@nestjs/typeorm';

import { JobResolver } from './jobs/job/job.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      typePaths: ['./**/*.graphql'],
      path: '/graphql',
      playground: {
        endpoint: '/graphiql',
      },
      introspection: false,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '12345',
      database: 'postgres',
      entities: ['dist/**/*.type.js'],
      synchronize: true,
    }),
  ],
  controllers: [AppController],
  providers: [AppService, Teste, JobResolver],
})
export class AppModule {}
