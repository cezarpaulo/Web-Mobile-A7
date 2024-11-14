import { Injectable } from '@nestjs/common';
import { Consumption } from './consumption.model';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';

@Injectable()
export class ConsumptionService {
  constructor(
    @InjectModel('Consumption')
    private readonly consumptionModel: Model<Consumption>,
  ) {}

  async createConsumption(consumption: Consumption) {
    const consumptionModel = new this.consumptionModel({
      userId: consumption.userId,
      consumo: consumption.consumo,
      date: new Date(consumption.date),
    });

    const result = await consumptionModel.save();
    return result.id as string;
  }

  async readConsumption() {
    const consumption = await this.consumptionModel.find().exec();
    return consumption;
  }

  async readIdUser(userId: number) {
    const result = await this.consumptionModel.find({ userId: userId }).exec();
    return result;
  }
  async readHistory(userId: number, dateIni: string, dateEnd: string) {
    const result = await this.consumptionModel
      .find({
        userId: userId,
        date: { $gte: new Date(dateIni), $lte: new Date(dateEnd) },
      })
      .exec();
    return result;
  }

  async consumptionAlert(userId: number) {
    const result = await this.consumptionModel.find({ userId: userId }).exec();

    if (result.length < 2) {
      console.log('Consulta inválida');
    } else {
      if (result[result.length] > result[result.length - 1]) {
        console.log('Alerta!! Consumo foi maior que o Mes anterior ');
      } else {
        console.log('Consumo Normal');
      }
    }
  }
}
