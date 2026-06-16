import { Module } from '@nestjs/common';
import { HistoryService } from './history.service';
import { HistoryController } from './history.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { HistoryAcces } from './entities/history-acces.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([
      HistoryAcces,
    ]),
  ],
  providers: [HistoryService],
  controllers: [HistoryController],
  exports: [HistoryService,],///"otros módulos pueden usar este servicio"
})
export class HistoryModule {}
