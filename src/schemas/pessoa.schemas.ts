import { IsEmail, IsInt, IsString, MaxLength, Min } from "class-validator"


export class PessoaSchema {
    @IsString()
    @MaxLength(100)
    nomePessoa: string

    @IsInt()
    @Min(1)
    idade: number

    @IsString()
    @IsEmail()
    @MaxLength(100)
    email: string
}