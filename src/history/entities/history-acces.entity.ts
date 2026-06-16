import {Column,Entity, PrimaryGeneratedColumn,} from "typeorm"

@Entity('historial_acceso')

export class HistoryAcces {

  @PrimaryGeneratedColumn()
  id_acceso!: number

  @Column()
  id_usuario!: number

  @Column()
  estado!: string

  @Column()
  direccion_ip!: string

  @Column({ type: 'text',nullable: true, })
  user_agent!: string

  @Column({
    type: 'timestamp',
    default: () =>
      'CURRENT_TIMESTAMP',
  })
  fecha_hora!: Date

}