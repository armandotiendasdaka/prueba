import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn } from "typeorm";
import { Vendedor } from "src/vendedor/entities/vendedor.entity";

@Entity({ name: 'cliente', schema: 'febeca' })
export class Cliente {

    @PrimaryColumn({ type: 'varchar', length: 20 })
    cliente: string

    @Column({ type: 'varchar', length: 100 })
    nombre: string

    @Column({ type: 'text', nullable: true })
    direccion: string

    @Column({ type: 'decimal', precision: 28, scale: 8, nullable: true })
    saldo: number

    @Column({ type: 'varchar', length: 20, nullable: true })
    zona: string

    @Column({ type: 'varchar' })
    password: string

    @ManyToMany(() => Vendedor, (vendedor) => vendedor.clientes)
    @JoinTable({
        name: 'CLIENTE_VENDEDOR',
        joinColumn: { name: 'cliente', referencedColumnName: 'cliente' },
        inverseJoinColumn: { name: 'vendedor', referencedColumnName: 'vendedor' },
    })
    vendedores: Vendedor[]
}
