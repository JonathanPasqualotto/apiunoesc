import { Body, Controller, Delete, Get, NotFoundException, Param, ParseIntPipe, Post, Put } from "@nestjs/common"
import { InjectRepository } from "@nestjs/typeorm"
import { PessoaModel } from "src/models/pessoa.model"
import { PessoaSchema } from "src/schemas/pessoa.schemas"
import { Repository } from "typeorm"


@Controller('/pessoa')
export class PessoaController {

    constructor(
        @InjectRepository(PessoaModel) private model: Repository<PessoaModel>,
    ) {}

    // INSERIR
    @Post()
    public async create(@Body() body: PessoaSchema): Promise<PessoaModel> {
        return this.model.save(body)
    } 

    // PESQUISAR POR PARAMETRO
    @Get(':idpessoa')
    public async getOne(@Param('idpessoa', ParseIntPipe) idpessoa:number): Promise<PessoaModel> {
        const pessoa = await this.model.findOne({ where: { idpessoa } })

        if(!pessoa){
            throw new NotFoundException(`Não foi encontrada uma pessoa com o id número ${idpessoa}`)
        }

        return pessoa
    }

    // PESQUISAR TODOS
    @Get()
    public async getAll(): Promise<PessoaModel[]> {
        return this.model.find()
    }

    // ALTERAR
    @Put(':idpessoa')
    public async update(@Param('idpessoa', ParseIntPipe) idpessoa: number, @Body() body: PessoaSchema): Promise<PessoaModel> {
        const pessoa = await this.model.findOne({ where: { idpessoa } })

        if(!pessoa){
            throw new NotFoundException(`Não foi encontrada uma pessoa com o id número ${idpessoa}`)
        }

        await this.model.update({ idpessoa }, body)

        return await this.model.findOne({ where: { idpessoa } })
    }

    // DELETAR
    @Delete(':idpessoa')
    public async delete(@Param('idpessoa', ParseIntPipe) idpessoa: number): Promise<string> {
        const pessoa = await this.model.findOne({ where: { idpessoa } })

        if(!pessoa){
            throw new NotFoundException(`Não foi encontrada uma pessoa com o id número ${idpessoa}`)
        }

        await this.model.delete(idpessoa)

        return `A pessoa com id ${idpessoa} foi deletada com sucesso`
    }
}