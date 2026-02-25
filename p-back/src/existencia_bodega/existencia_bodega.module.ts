import { Module } from '@nestjs/common';
import { ExistenciaBodegaService } from './existencia_bodega.service';
import { ExistenciaBodegaController } from './existencia_bodega.controller';

@Module({
  controllers: [ExistenciaBodegaController],
  providers: [ExistenciaBodegaService],
})
export class ExistenciaBodegaModule { }
