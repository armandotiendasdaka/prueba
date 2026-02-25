import { Articulo } from "src/articulo/entities/articulo.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'EXISTENCIA_BODEGA' })
export class ExistenciaBodega {

    @PrimaryColumn({ type: 'varchar', length: 20 })
    ARTICULO: string;

    @PrimaryColumn({ type: 'varchar', length: 10 })
    BODEGA: string;

    @Column({ type: 'decimal', precision: 28, scale: 8 })
    CANT_DISPONIBLE: number;

    @ManyToOne(() => Articulo)
    @JoinColumn({ name: 'ARTICULO' })
    articulo: Articulo;
}
