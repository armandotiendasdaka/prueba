import { Injectable } from '@nestjs/common';
import { CreateArticuloDto } from './dto/create-articulo.dto';
import { UpdateArticuloDto } from './dto/update-articulo.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Articulo } from './entities/articulo.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ArticuloService {

  constructor(

    @InjectRepository(Articulo)
    private readonly articuloRepository: Repository<Articulo>,
  ) { }

  create(createArticuloDto: CreateArticuloDto) {
    return 'This action adds a new articulo';
  }

  async findAllValue() {

    try {

      const inventario = await this.articuloRepository.createQueryBuilder('articulo')
        .leftJoin('articulo.existencias', 'existencia')
        .select(['articulo.articulo', 'articulo.descripcion', 'articulo.precio_base_local'])
        .addSelect('CAST(SUM(existencia.cant_disponible) AS NUMERIC(28,2))', 'TOTAL_CANTIDAD')
        .addSelect('CAST(SUM(articulo.precio_base_local * existencia.cant_disponible) AS NUMERIC(28,2))', 'VALOR_TOTAL_INVENTARIO')
        .groupBy('articulo.articulo')
        .getRawMany();

      return inventario;

    } catch (error) {

      console.log("ERROR AL OBTENER EL VALOR DEL INVENTARIO ", error);

      throw error;
    }
  }

  findAll() {

    try {

      const inventario = this.articuloRepository.find({
        relations: ['existencias'],
      });

      return inventario;

    } catch (error) {

      console.log("ERROR AL OBTENER EL INVENTARIO ", error);

      throw error;
    }

  }

  findOne(id: number) {
    return `This action returns a #${id} articulo`;
  }

  update(id: number, updateArticuloDto: UpdateArticuloDto) {
    return `This action updates a #${id} articulo`;
  }

  remove(id: number) {
    return `This action removes a #${id} articulo`;
  }
}
