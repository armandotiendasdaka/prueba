import { Column, Entity, OneToMany, PrimaryColumn } from "typeorm"
import { ExistenciaBodega } from "src/existencia_bodega/entities/existencia_bodega.entity"

@Entity({ name: 'articulo', schema: 'febeca' })
export class Articulo {

    @PrimaryColumn({ type: 'varchar', length: 20 })
    articulo: string

    @Column({ type: 'varchar', length: 254 })
    descripcion: string

    @Column({ type: 'decimal', precision: 28, scale: 8, nullable: true })
    precio_base_local: number

    @Column({ type: 'char', length: 1, default: 'S', nullable: true })
    activo: string

    @OneToMany(() => ExistenciaBodega, (existencia) => existencia.articulo)
    existencias: ExistenciaBodega[];
}
