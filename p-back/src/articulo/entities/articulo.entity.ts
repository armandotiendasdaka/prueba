import { Column, Entity, PrimaryColumn } from "typeorm"

@Entity({ name: 'ARTICULO' })
export class Articulo {

    @PrimaryColumn({ type: 'varchar', length: 20 })
    ARTICULO: string

    @Column({ type: 'varchar', length: 254 })
    DESCRIPCION: string

    @Column({ type: 'decimal', precision: 28, scale: 8, nullable: true })
    PRECIO_BASE_LOCAL: number

    @Column({ type: 'char', length: 1, default: 'S', nullable: true })
    ACTIVO: string
}
