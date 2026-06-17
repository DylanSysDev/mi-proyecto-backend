import { Injectable, UnauthorizedException,} from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { JwtService } from '@nestjs/jwt';
import { Repository } from 'typeorm';
import * as bcrypt from 'bcrypt';
import { Usuario } from '../usuario/entities/usuario.entity';
import { LoginDto } from './dto/login.dto';
import { HistoryService,} from '../history/history.service'
import { Request } from 'express';
@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario)
    private usuarioRepository: Repository<Usuario>,//control sobre la tabla usuario

    private jwtService: JwtService,//herramienta para crear y validar tokens 

      
    private historialService:  HistoryService,
  ) {}
//registrar usuario
  async register(body: any) {

    const existeUsuario =
      await this.usuarioRepository.findOne({
        where: {
          carnet_de_identidad:
            body.carnet_de_identidad,
        },
      });

    if (existeUsuario) {

      throw new UnauthorizedException(
        'El usuario ya existe',
      );

    }

    const hashedPassword =
      await bcrypt.hash(
        body.contrasenia,
        10,
      );

    const nuevoUsuario =
      this.usuarioRepository.create({

        ...body,

        contrasenia:
          hashedPassword,

      });

    return await this.usuarioRepository.save(
      nuevoUsuario,
    );
  }
  
//LOGIN
    
  async login(loginDto: LoginDto,req:Request) {

    const usuario = await this.usuarioRepository.findOne({
      where: {
        carnet_de_identidad:
          loginDto.carnet_de_identidad,
      },
    });

    if (!usuario) {
      throw new UnauthorizedException(
        'Usuario no encontrado',
      );
    }

    const passwordValida = await bcrypt.compare(
      loginDto.contrasenia,
      usuario.contrasenia,
    );

    if (!passwordValida) {
      throw new UnauthorizedException(
        'Contraseña incorrecta',
      );
    }

    const payload = {//la informacion que viajara dentro del JWT
      sub: usuario.id_usuario,

      nombre: usuario.nombre,

      tipo: usuario.tipo,
    };

    const ip = req.ip || 'desconocida';
    const userAgent = req.headers['user-agent'] || 'desconocido';
    await this.historialService.registrarAcceso(usuario.id_usuario,'entrada',ip,userAgent,);
    return {
      access_token:
        await this.jwtService.signAsync(payload),

      usuario,
    };

    
  }
}

