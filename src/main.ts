import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { TransformaInterceptor } from './interceptors/transforma.interceptors';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  app.setGlobalPrefix('/api')
  app.useGlobalPipes(new ValidationPipe())
  app.useGlobalInterceptors(new TransformaInterceptor())

  await app.listen(3000);
}
bootstrap();
