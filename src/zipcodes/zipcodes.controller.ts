import { Controller, Get, Param } from '@nestjs/common';
import { ZipcodesService } from './zipcodes.service';

@Controller('zipcodes')
export class ZipcodesController {
  constructor(private readonly zipcodesService: ZipcodesService) {}

  @Get()
  findAll() {
    return this.zipcodesService.findAll();
  }

  @Get('code/:zipcode')
  findByZipcode(@Param('zipcode') zipcode: string) {
    return this.zipcodesService.findByZipcode(zipcode);
  }

  @Get('code/:zipcode/:field')
  findByZipcodeAndParam(
    @Param('zipcode') zipcode: string,
    @Param('field') field: string,
  ) {
    return this.zipcodesService.findByZipcodeAndParam(zipcode, field);
  }
}
