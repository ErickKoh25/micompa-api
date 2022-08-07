import { Module } from '@nestjs/common';
import { ZipcodesService } from './zipcodes.service';
import { ZipcodesController } from './zipcodes.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Zipcodes, ZipcodesSchema } from 'src/schemas/zipcodes.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Zipcodes.name, schema: ZipcodesSchema },
    ]),
  ],
  controllers: [ZipcodesController],
  providers: [ZipcodesService],
})
export class ZipcodesModule {}
