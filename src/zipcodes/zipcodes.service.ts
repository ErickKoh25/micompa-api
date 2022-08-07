import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { Zipcodes, ZipcodesDocument } from 'src/schemas/zipcodes.schema';

@Injectable()
export class ZipcodesService {
  constructor(
    @InjectModel(Zipcodes.name)
    private zipcodesModel: Model<ZipcodesDocument>,
  ) {}

  async findAll() {
    return this.zipcodesModel.find();
  }

  async findByZipcode(zipcode: string) {
    return this.zipcodesModel.find({ d_codigo: zipcode });
  }

  async findByZipcodeAndParam(zipcode: string, field: string) {
    return this.zipcodesModel.aggregate([
      {
        $match: {
          d_codigo: zipcode,
        },
      },
      {
        $group: {
          _id: {
            name: `$${field}`,
            value: `$${field}`,
          },
        },
      },
      {
        $sort: {
          name: 1,
        },
      },
    ]);
  }
}
