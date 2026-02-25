import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { DatabaseModule } from './database/database.module';
import { VendedorModule } from './vendedor/vendedor.module';
import { ClienteModule } from './cliente/cliente.module';
import { ArticuloModule } from './articulo/articulo.module';
import { ExistenciaBodegaModule } from './existencia_bodega/existencia_bodega.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    DatabaseModule,
    VendedorModule,
    ClienteModule,
    ArticuloModule,
    ExistenciaBodegaModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule { }
