import * as mongoose from 'mongoose';
export const ConsumptionSchema = new mongoose.Schema({
  userId: { type: Number, require: true },
  consumo: { type: Number, require: true },
  date: { type: Date, require: true },
});

export interface Consumption extends mongoose.Document {
  id: string;
  userId: number;
  consumo: number;
  date: Date;
}
