import { PessoaModel } from "src/models/pessoa.model";
import { PessoaSchema } from "src/schemas/pessoa.schemas";
import { Repository } from "typeorm";
export declare class PessoaController {
    private model;
    constructor(model: Repository<PessoaModel>);
    create(body: PessoaSchema): Promise<PessoaModel>;
    getOne(idpessoa: number): Promise<PessoaModel>;
    getAll(): Promise<PessoaModel[]>;
    update(idpessoa: number, body: PessoaSchema): Promise<PessoaModel>;
    delete(idpessoa: number): Promise<string>;
}
