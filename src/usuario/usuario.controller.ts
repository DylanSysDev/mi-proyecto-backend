import { Controller, Get, Param } from '@nestjs/common';

import { UsuarioService } from './usuario.service';
import { UseGuards } from '@nestjs/common';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';

import {
  Body,
  Patch,
} from '@nestjs/common';

import { UpdateUsuarioDto }
from './dto/update-usuario.dto';

@Controller('usuario')
export class UsuarioController {
  constructor(
    private readonly usuarioService: UsuarioService,
  ) {}

//  @UseGuards(JwtAuthGuard)
  @Get()
  findAll() {
    return this.usuarioService.findAll();
  }
  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.usuarioService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body()
    updateUsuarioDto:
      UpdateUsuarioDto,
  ) {

    return this.usuarioService.update(
      +id,
      updateUsuarioDto,
    );

  }
  //botones
  @Patch(':id/password')
  resetPassword(
    @Param('id') id: string,
    @Body() body: { contrasenia: string },
  ) {
    return this.usuarioService.resetPassword(
      +id,
      body.contrasenia,
    );
  }

  @Patch(':id/tipo')
  updateTipo(
    @Param('id') id: string,
    @Body() body: { tipo: string },
  ) {
    return this.usuarioService.updateTipo(
      +id,
      body.tipo,
    );
  }

}