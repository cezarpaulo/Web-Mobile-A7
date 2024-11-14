import { Controller, Body, Get, Post, Param } from '@nestjs/common';
import { ConsumptionService } from './consumption.service';
import { Consumption } from './consumption.model';

@Controller('consumption')
export class ConsumptionController {
  constructor(private readonly consumptionService: ConsumptionService) {}

  @Get()
  readAllsConsumption(): Promise<any> {
    return this.consumptionService.readConsumption();
  }
  @Post()
  async createConsumption(@Body() consumption: Consumption): Promise<any> {
    var response = await this.consumptionService.createConsumption(consumption);
    return { id: response };
  }

  @Get(':userId')
  async readIdUser(@Param('userId') userId: number) {
    return this.consumptionService.readIdUser(userId);
  }

  @Get('/:userId/:dateIni/:dateEnd')
  async readHistory(
    @Param('userId') userId: number,
    @Param('dateIni') dateIni: string,
    @Param('dateEnd') dateEnd: string,
  ) {
    return this.consumptionService.readHistory(userId, dateIni, dateEnd);
  }

  @Get('/:alert/:userId/')
  async alert(@Param('alert') alert: string, @Param('userId') userId: number) {
    if (alert == 'alert') {
      return this.consumptionService.consumptionAlert(userId);
    }
  }
}
