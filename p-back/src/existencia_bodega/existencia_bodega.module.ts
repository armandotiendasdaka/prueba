import { Module } from '@nestjs/common';
import { ExistenciaBodegaService } from './existencia_bodega.service';
import { ExistenciaBodegaController } from './existencia_bodega.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ExistenciaBodega } from './entities/existencia_bodega.entity';

@Module({
  imports: [
    TypeOrmModule.forFeature([ExistenciaBodega])
  ],
  controllers: [ExistenciaBodegaController],
  providers: [ExistenciaBodegaService],
})
export class ExistenciaBodegaModule { }
