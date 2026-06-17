//VALIDACIÓN DE TOKNES
import { Injectable } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class JwtStrategy extends PassportStrategy(Strategy,){//CONECTA PASSPORT, JWT, NESTJS
  //PASSPORT LIBRERÍA DE AUTENTICACIÓN 
  //
  constructor(  private configService: ConfigService, ) {
    super({
      jwtFromRequest:
        ExtractJwt.fromAuthHeaderAsBearerToken(),//Bearer [token]
/**
 *  obtén token desde:
    Authorization: Bearer ...
 */
      ignoreExpiration: false,
      secretOrKey:   configService.get<string>('JWT_SECRET')!,
    });
  }

  async validate(payload: any) {
    return {
      id: payload.sub,

      nombre: payload.nombre,

      tipo: payload.tipo,
    };
  }
}
/**
 * ¿Qué hace esto?

Este archivo:

valida automáticamente el token JWT.
 */