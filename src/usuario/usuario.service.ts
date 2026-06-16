import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Usuario } from './entities/usuario.entity';
//

import * as bcrypt from 'bcrypt';
import { UpdateUsuarioDto } from './dto/update-usuario.dto';

@Injectable()
export class UsuarioService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,
  ) {}

  findAll() {
    return this.usuarioRepository.find();
  }
  // findOne(id: number) {
  //   return this.productoRepository.findOne({
  //     where: {
  //       id_producto: id,
  //     },
  //   });
  // }
  findOne(id: number){
    return this.usuarioRepository.findOne({
      where:{
        id_usuario:id
      },
    });
  }

  async update(
    id: number,
    updateUsuarioDto: UpdateUsuarioDto,
  ){

  const usuario =
    await this.findOne(id);

  if (!usuario) {

    return null;

  }

  if (
    updateUsuarioDto.contrasenia
  ) {

    updateUsuarioDto.contrasenia =
      await bcrypt.hash(
        updateUsuarioDto.contrasenia,
        10,
      );

  }

  Object.assign(
    usuario,
    updateUsuarioDto,
  );

  return this.usuarioRepository.save(
    usuario,
  );

}
//botones
async resetPassword(
  id: number,
  nuevaContrasenia: string,
) {
  const hash = await bcrypt.hash(
    nuevaContrasenia,
    10,
  );

  await this.usuarioRepository.update(
    id,
    {
      contrasenia: hash,
    },
  );

  return {
    message:
      'Contraseña actualizada',
  };
}

async updateTipo(
  id: number,
  tipo: string,
) {
  await this.usuarioRepository.update(
    id,
    {
      tipo,
    },
  );

  return {
    message:
      'Tipo actualizado',
  };
}

}