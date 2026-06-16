import { Injectable,} from '@nestjs/common'
import {InjectRepository,} from '@nestjs/typeorm'
import { Repository,} from 'typeorm'

import { HistoryAcces,} from './entities/history-acces.entity'

@Injectable()

export class HistoryService {

  constructor( @InjectRepository( HistoryAcces, ) private historialRepository:  Repository<HistoryAcces>,

  ) {}

  async registrarAcceso(id_usuario: number, estado: string, direccion_ip: string, user_agent: string,) {
    const historial = this.historialRepository.create({
        id_usuario,
        estado,
        direccion_ip,
        user_agent,
      })

    return await
      this.historialRepository.save(historial,)

  }

  async findAll() {
    return await
      this.historialRepository.find({
        order: {
          fecha_hora: 'DESC',
        },
      })

  }

}