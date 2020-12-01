import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';

import { TypeOrmModule } from '@nestjs/typeorm';

import { JobService } from './jobs/job/job.service';
import { AppService } from './app.service';

import { AppController } from './app.controller';

import { JobResolver } from './jobs/job/job.resolver';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    TypeOrmModule.forRoot(),
  ],
  providers: [JobResolver, JobService],
})
export class AppModule {}
