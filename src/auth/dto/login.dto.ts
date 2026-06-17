import { IsNotEmpty, IsString } from 'class-validator';

export class LoginDto {
  @IsString()
  @IsNotEmpty()
  carnet_de_identidad!: string;

  @IsString()
  @IsNotEmpty()
  contrasenia!: string;
}