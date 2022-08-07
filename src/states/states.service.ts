import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { States, StatesDocument } from 'src/schemas/states.schema';

@Injectable()
export class StatesService {
  constructor(
    @InjectModel(States.name)
    private statesModel: Model<StatesDocument>,
  ) {}

  findAll() {
    return this.statesModel.find();
  }

  findOne(id: string) {
    return this.statesModel.findOne({ _id: id });
  }
}
