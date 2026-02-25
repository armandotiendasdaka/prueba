import { PartialType } from '@nestjs/mapped-types';
import { CreateExistenciaBodegaDto } from './create-existencia_bodega.dto';

export class UpdateExistenciaBodegaDto extends PartialType(CreateExistenciaBodegaDto) {}
