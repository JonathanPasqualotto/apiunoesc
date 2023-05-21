import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class PessoaModel {
    @PrimaryGeneratedColumn()
    idpessoa: number

    @Column({ length: 100 })
    nomePessoa: string

    @Column('integer')
    idade: number

    @Column({ length: 100 })
    email: string
}

