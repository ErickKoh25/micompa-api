import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type StatesDocument = States & Document;

@Schema()
export class States {
  @Prop()
  states: string;
  @Prop()
  country: string;
}

export const StatesSchema = SchemaFactory.createForClass(States);
