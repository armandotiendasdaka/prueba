import { Articulo } from "src/articulo/entities/articulo.entity";
import { Entity, Column, PrimaryColumn, ManyToOne, JoinColumn } from "typeorm";

@Entity({ name: 'existencia_bodega', schema: 'febeca' })
export class ExistenciaBodega {

    @PrimaryColumn({ type: 'varchar', length: 20 })
    @ManyToOne(() => Articulo, (articulo) => articulo.existencias)
    @JoinColumn({ name: 'articulo' })
    articulo: Articulo;

    @PrimaryColumn({ type: 'varchar', length: 10 })
    bodega: string;

    @Column({ type: 'decimal', precision: 28, scale: 8 })
    cant_disponible: number;

}
