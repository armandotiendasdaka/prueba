import { Cliente } from "src/cliente/entities/cliente.entity";
import { Column, Entity, ManyToMany, PrimaryColumn } from "typeorm";

@Entity({ name: 'VENDEDOR' })
export class Vendedor {

    @PrimaryColumn({ type: 'varchar', length: 10 })
    VENDEDOR: string

    @Column({ type: 'char', length: 1, default: "S", nullable: true })
    ACTIVO: string

    @Column({ type: 'varchar', length: 100 })
    NOMBRE: string

    @ManyToMany(() => Cliente, (cliente) => cliente.vendedores)
    clientes: Cliente[]
}
