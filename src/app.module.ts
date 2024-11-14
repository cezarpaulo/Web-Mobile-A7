import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConsumptionModule } from './consumption/consumption.module';
import { MongooseModule } from '@nestjs/mongoose';

@Module({
  imports: [
    ConsumptionModule,
    MongooseModule.forRoot(
      'mongodb+srv://cezarpaulodev:6yvwBh2liZ8hXl7c@webmobile.6tuvs.mongodb.net/webmobile?retryWrites=true&w=majority&appName=WebMobile',
    ),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
