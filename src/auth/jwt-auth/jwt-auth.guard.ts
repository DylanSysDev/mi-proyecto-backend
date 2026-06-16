//ESTE ARCHIVO PROTEGE RUTAS
import { Injectable } from '@nestjs/common';

import { AuthGuard } from '@nestjs/passport';

@Injectable()
export class JwtAuthGuard extends AuthGuard('jwt') {}

/**
 * ¿Qué hace esto?

Protege rutas automáticamente.

Entonces:
@UseGuards(JwtAuthGuard)

significa:

esta ruta necesita token válido
 */