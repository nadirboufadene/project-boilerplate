import { NestFactory } from '@nestjs/core';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

const DEFAULT_PORT = 5000;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const port: number = +process.env.APP_PORT || DEFAULT_PORT;
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  console.log('Port running on: ', port);

  const options = new DocumentBuilder()
    .addBearerAuth()
    .setTitle('Appointements APP')
    .setDescription('Appointements API documentation')
    .setVersion('0.1')
    .addTag('Appointements')
    .build();
  const document = SwaggerModule.createDocument(app, options);
  SwaggerModule.setup('api', app, document);

  await app.listen(port);
}

bootstrap();
