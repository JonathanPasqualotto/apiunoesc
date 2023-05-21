import { Module } from "@nestjs/common";
import { TypeOrmModule } from "@nestjs/typeorm";
import { PessoaController } from "src/controllers/pessoa.controller";
import { PessoaModel } from "src/models/pessoa.model";

@Module({
    imports: [TypeOrmModule.forFeature([PessoaModel])],
    controllers: [PessoaController],
})
export class PessoaModule {}
