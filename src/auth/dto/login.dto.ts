import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  carnet_de_identidad!: string;

  @IsString()
  @IsNotEmpty()
  contrasenia!: string;
}/*
¿Qué es DTO?

DTO significa:

Data Transfer Object

En NestJS:
sirve para definir los datos que llegan al backend.
*/ 