import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type DirectionsDocument = Directions & Document;

@Schema()
export class Directions {
  @Prop()
  street: string;
  @Prop()
  external_number: string;

  @Prop()
  internal_number: string;

  @Prop()
  zipcode: string;

  @Prop()
  settlement: string;

  @Prop()
  municipality: string;

  @Prop()
  city: string;

  @Prop()
  state: string;

  @Prop()
  country: string;

  @Prop()
  coords: Array<number>;
}

export const DirectionsSchema = SchemaFactory.createForClass(Directions);
