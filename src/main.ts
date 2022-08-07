import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import config from './config/config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors({
    origin: ['*', 'http://localhost:3000', 'https://erickkoh25.github.io/'],
    methods: ['GET', 'POST', 'PATCH', 'PUT'],
    credentials: true,
  });
  const configService = config();
  await app.listen(process.env.PORT);
}
bootstrap();
