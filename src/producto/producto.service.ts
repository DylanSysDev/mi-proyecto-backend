import { Injectable } from '@nestjs/common';

import { InjectRepository } from '@nestjs/typeorm';

import { Repository } from 'typeorm';

import { Producto } from './entities/producto.entity';

@Injectable()
export class ProductoService {
  constructor(
    @InjectRepository(Producto)
    private productoRepository: Repository<Producto>,
  ) {}

  findAll() {
    return this.productoRepository.find();
  }

  findOne(id: number) {
    return this.productoRepository.findOne({
      where: {
        id_producto: id,
      },
    });
  }

  create(data: Partial<Producto>) {
    const producto =
      this.productoRepository.create(data);

    return this.productoRepository.save(producto);
  }

  async update(
    id: number,
    data: Partial<Producto>,
  ) {
    await this.productoRepository.update(
      id,
      data,
    );

    return this.findOne(id);
  }

  async remove(id: number) {
    const producto = await this.findOne(id);

    await this.productoRepository.delete(id);

    return producto;
  }
}