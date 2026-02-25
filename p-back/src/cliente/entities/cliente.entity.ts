import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Vendedor } from "src/vendedor/entities/vendedor.entity";

@Entity({ name: 'CLIENTE' })
export class Cliente {

    @PrimaryColumn({ type: 'varchar', length: 20 })
    CLIENTE: string

    @Column({ type: 'varchar', length: 100 })
    NOMBRE: string

    @Column({ type: 'text', nullable: true })
    DIRECCION: string

    @Column({ type: 'decimal', precision: 28, scale: 8, nullable: true })
    SALDO: number

    @Column({ type: 'varchar', length: 20, nullable: true })
    ZONA: string

    @ManyToMany(() => Vendedor, (vendedor) => vendedor.clientes)
    @JoinTable({
        name: 'CLIENTE_VENDEDOR',
        joinColumn: { name: 'CLIENTE', referencedColumnName: 'CLIENTE' },
        inverseJoinColumn: { name: 'VENDEDOR', referencedColumnName: 'VENDEDOR' },
    })
    vendedores: Vendedor[]
}
