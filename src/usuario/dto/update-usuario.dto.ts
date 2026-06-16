import { PartialType } from '@nestjs/mapped-types';
import { CreateUsuarioDto } from './create-usuario.dto';

//export class UpdateUsuarioDto extends PartialType(CreateUsuarioDto) {}
export class UpdateUsuarioDto {

  nombre?: string;

  apellidos?: string;

  fecha_nacimiento?: Date;

  genero?: string;

  nro_celular?: string;

  contrasenia?: string;

}
