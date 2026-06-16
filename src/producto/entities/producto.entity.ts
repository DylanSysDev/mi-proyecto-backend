import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('producto')
export class Producto {
  @PrimaryGeneratedColumn({
    name: 'id_producto',
  })
  id_producto!: number;

  @Column()
  nombre!: string;

  @Column('decimal')
  precio!: number;

  @Column()
  stock!: number;

  @Column()
  descripcion!: string;

  @Column()
  tipo!: string;
}
