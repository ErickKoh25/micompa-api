import { Module } from '@nestjs/common';
import { StatesService } from './states.service';
import { StatesController } from './states.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { States, StatesSchema } from 'src/schemas/states.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: States.name, schema: StatesSchema }]),
  ],
  controllers: [StatesController],
  providers: [StatesService],
})
export class StatesModule {}
