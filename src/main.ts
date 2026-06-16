import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';

import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

 /* app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      transform: true,
    }),
  );*/
 //app.enableCors();//“acepta peticiones desde otros dominios”
  // version para correr localmente
  // app.enableCors({
  //   origin: 'http://localhost:5173',
  // });

 /* app.enableCors({
    origin: true,
    credentials: true,
  });
  //await app.listen(3000);
  await app.listen(process.env.PORT || 3000);*/
  app.enableCors();
  const port = process.env.PORT || 3000; 
  await app.listen(port);
  console.log(`Application is running on: http://localhost:${port}`);
}

bootstrap();

/*
Además:
activa transformación global en NestJS
¿Por qué esto importa?

Porque NestJS necesita:

transformar body,
validar DTOs,
limpiar propiedades.

Esto es estándar profesional.

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
*/