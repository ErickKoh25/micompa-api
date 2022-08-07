import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ZipcodesModule } from './zipcodes/zipcodes.module';
import { DirectionsModule } from './directions/directions.module';
import config from './config/config';
import { StatesModule } from './states/states.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    ZipcodesModule,
    DirectionsModule,
    StatesModule,
    AuthModule,
    ConfigModule.forRoot({ load: [config] }),
    MongooseModule.forRootAsync({
      imports: [ConfigModule],
      inject: [ConfigService],
      useFactory: async (config: ConfigService) => ({
        uri: config.get<string>('DB_MONGO_URL'), // Loaded from .ENV
      }),
    }),
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
