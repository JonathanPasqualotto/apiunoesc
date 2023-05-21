import { Module } from '@nestjs/common';
import { PessoaModule } from './modules/pessoa.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [PessoaModule, TypeOrmModule.forRoot(
    {
      "type": "postgres",
      "host": "localhost",
      "port": 5432,
      "username": "SEU_USUARIO",
      "password": "SUA_SENHA",
      "database": "SUA_DATABASE",
      "synchronize": true,
      "logging": false,
      "entities": [ __dirname + '/**/*.model{.js,.ts}']
    }
    
  )],
})
export class AppModule {}
