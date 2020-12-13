import { JobModule } from './jobs/job.module';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
    }),
    MongooseModule.forRoot('mongodb://127.0.0.1:27017'),
    JobModule,
  ],
})
export class AppModule {}
