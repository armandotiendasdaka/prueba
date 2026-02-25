import { Cliente } from "src/cliente/entities/cliente.entity";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";

@Entity({ name: 'vendedor', schema: 'febeca' })
export class Vendedor {

    @PrimaryColumn({ type: 'varchar', length: 10 })
    vendedor: string

    @Column({ type: 'char', length: 1, default: "S", nullable: true })
    activo: string

    @Column({ type: 'varchar', length: 100 })
    nombre: string

    @ManyToMany(() => Cliente, (cliente) => cliente.vendedores)
    clientes: Cliente[]
}
