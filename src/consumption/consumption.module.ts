import { Module } from '@nestjs/common';
import { ConsumptionService } from './consumption.service';
import { ConsumptionController } from './consumption.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { ConsumptionSchema } from './consumption.model';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: 'Consumption', schema: ConsumptionSchema },
    ]),
  ],
  providers: [ConsumptionService],
  controllers: [ConsumptionController],
})
export class ConsumptionModule {}
