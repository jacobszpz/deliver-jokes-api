import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { SwaggerModule, DocumentBuilder } from '@nestjs/swagger';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
      new ValidationPipe({
        transform: true,
        transformOptions: {
            enableImplicitConversion: true,
        }
      }),
  );

  const config = new DocumentBuilder()
    .setTitle('Joke Central API')
    .setDescription('The official spec for the joke central API')
    .setVersion('0.1')
    .addTag('jokes')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(3000);
}

bootstrap();
