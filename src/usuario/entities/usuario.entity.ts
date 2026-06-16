import {
  Column,
  Entity,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity('usuario')
export class Usuario {
  @PrimaryGeneratedColumn({
    name: 'id_usuario',
  })
  id_usuario!: number;

  @Column()
  nombre!: string;

  @Column()
  apellidos!: string;

  @Column()
  carnet_de_identidad!: string;

  @Column()
  fecha_nacimiento!: Date;

  @Column()
  genero!: string;

  @Column()
  nro_celular!: string;

  @Column()
  contrasenia!: string;

  @Column()
  tipo!: string;
}