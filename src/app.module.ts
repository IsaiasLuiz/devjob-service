import { JobModule } from './jobs/job.module';
import { Module } from '@nestjs/common';

import { GraphQLModule } from '@nestjs/graphql';

import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    GraphQLModule.forRoot({
      autoSchemaFile: true,
      cors: true,
      introspection: true,
      playground: true,
    }),
    MongooseModule.forRoot('mongodb+srv://devjob:12345@cluster0.sjojk.mongodb.net/devjob?retryWrites=true&w=majority'),
    JobModule,
  ],
})
export class AppModule {}
