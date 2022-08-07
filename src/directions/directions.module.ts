import { Module } from '@nestjs/common';
import { DirectionsService } from './directions.service';
import { DirectionsController } from './directions.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Directions, DirectionsSchema } from 'src/schemas/directions.schema';

@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Directions.name, schema: DirectionsSchema },
    ]),
  ],
  controllers: [DirectionsController],
  providers: [DirectionsService],
})
export class DirectionsModule {}
