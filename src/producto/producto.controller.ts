import {Body, Controller, Delete, Get, Param, Patch, Post, UseGuards,} from '@nestjs/common';
import { ProductoService } from './producto.service';
import { JwtAuthGuard } from '../auth/jwt-auth/jwt-auth.guard';
import { Roles } from '../auth/decorators/roles.decorator';
import { RolesGuard } from '../auth/roles/roles.guard';
@Controller('producto')
export class ProductoController {
  constructor(
    private readonly productoService: ProductoService,
  ) {}

  @Get()
  findAll() {
    return this.productoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.productoService.findOne(+id);
  }

  //CON ESTO PODEMOS JUGAR CON LOS ROLES 
  @Roles('ADMINISTRADOR')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Post()
  create(@Body() body: any) {
    return this.productoService.create(body);
  }
  /* CON ESTO HACIAMOS QUE SOLO PUEDAN ACCEDER A ESTAS APIS LOS AUTENTIFICADOS
  @UseGuards(JwtAuthGuard)
  @Post()
  create(@Body() body: any) {
    return this.productoService.create(body);
  }
  */

  @Roles('ADMINISTRADOR')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() body: any,
  ) {
    return this.productoService.update(
      +id,
      body,
    );
  }
  @Roles('ADMINISTRADOR')
  @UseGuards(JwtAuthGuard, RolesGuard)
  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.productoService.remove(+id);
  }
}
