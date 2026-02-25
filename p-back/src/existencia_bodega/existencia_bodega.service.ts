import { Injectable } from '@nestjs/common';
import { CreateExistenciaBodegaDto } from './dto/create-existencia_bodega.dto';
import { UpdateExistenciaBodegaDto } from './dto/update-existencia_bodega.dto';

@Injectable()
export class ExistenciaBodegaService {
  create(createExistenciaBodegaDto: CreateExistenciaBodegaDto) {
    return 'This action adds a new existenciaBodega';
  }

  findAll() {
    return `This action returns all existenciaBodega`;
  }

  findOne(id: number) {
    return `This action returns a #${id} existenciaBodega`;
  }

  update(id: number, updateExistenciaBodegaDto: UpdateExistenciaBodegaDto) {
    return `This action updates a #${id} existenciaBodega`;
  }

  remove(id: number) {
    return `This action removes a #${id} existenciaBodega`;
  }
}
