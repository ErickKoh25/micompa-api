import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import { Document } from 'mongoose';

export type ZipcodesDocument = Zipcodes & Document;

@Schema()
export class Zipcodes {
  @Prop()
  d_codigo: string;
  @Prop()
  D_mnpio: string;

  @Prop()
  d_estado: string;

  @Prop()
  d_ciudad: string;

  @Prop()
  d_asenta: string;
}

export const ZipcodesSchema = SchemaFactory.createForClass(Zipcodes);
