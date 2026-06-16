//ESTE ARCHIVO DEFINE ROLES REQUERIDOS.
import { SetMetadata } from '@nestjs/common';

export const Roles = (...roles: string[]) =>
  SetMetadata('roles', roles);
/*
¿Qué hace?

Guarda metadata sobre endpoints.

Ejemplo
@Roles('ADMINISTRADOR')
Traducción
esta ruta requiere ADMINISTRADOR

!NO VALIDA NADA, SOLO GUARDA LA METADATA
*/