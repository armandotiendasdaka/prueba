import { Injectable, UnauthorizedException } from '@nestjs/common';
import { SingInClienteDto } from './cliente/dto/singIn-client.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Cliente } from './cliente/entities/cliente.entity';
import { Repository } from 'typeorm';

@Injectable()
export class AppService {

  constructor(
    @InjectRepository(Cliente)
    private clienteRepository: Repository<Cliente>,
  ) { }

  async signIn(signInDto: SingInClienteDto) {

    try {
      const cliente = await this.clienteRepository.findOneBy({ cliente: signInDto.cliente });

      if (!cliente || cliente.password !== signInDto.password) {

        throw new UnauthorizedException({
          success: false,
          message: 'Credenciales incorrectas',
        });
      }

      return {
        success: true,
        message: 'Cliente encontrado',
        token: Math.random().toString(36).substring(2)
      };
    } catch (error) {
      console.log(error);

      throw error;
    }

  }
}
