import { Controller, Get,} from '@nestjs/common'
import { HistoryService,} from './history.service'

@Controller('history')

export class HistoryController {

  constructor(

    private historialService:
      HistoryService,

  ) {}
  
  @Get()
  findAll() {
    return this.historialService.findAll()
  }

}