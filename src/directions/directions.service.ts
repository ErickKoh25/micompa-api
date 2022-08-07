import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Directions, DirectionsDocument } from 'src/schemas/directions.schema';
import { CreateDirectionDto } from './dto/create-direction.dto';
import { UpdateDirectionDto } from './dto/update-direction.dto';

@Injectable()
export class DirectionsService {
  constructor(
    @InjectModel(Directions.name)
    private directionsModel: Model<DirectionsDocument>,
  ) {}

  create(createDirectionDto: CreateDirectionDto) {
    return new this.directionsModel(createDirectionDto).save();
  }

  findAll() {
    return this.directionsModel.find();
  }

  findById(id: string) {
    return this.directionsModel.find({ _id: id });
  }

  update(id: string, updateDirectionDto: UpdateDirectionDto) {
    return this.directionsModel.updateOne(
      { _id: id },
      { $set: { ...updateDirectionDto } },
    );
  }

  remove(id: string) {
    return this.directionsModel.deleteOne({ _id: id });
  }
}
