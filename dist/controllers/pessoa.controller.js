"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PessoaController = void 0;
const common_1 = require("@nestjs/common");
const typeorm_1 = require("@nestjs/typeorm");
const pessoa_model_1 = require("../models/pessoa.model");
const pessoa_schemas_1 = require("../schemas/pessoa.schemas");
const typeorm_2 = require("typeorm");
let PessoaController = class PessoaController {
    constructor(model) {
        this.model = model;
    }
    async create(body) {
        return this.model.save(body);
    }
    async getOne(idpessoa) {
        const pessoa = await this.model.findOne({ where: { idpessoa } });
        if (!pessoa) {
            throw new common_1.NotFoundException(`Não foi encontrada uma pessoa com o id número ${idpessoa}`);
        }
        return pessoa;
    }
    async getAll() {
        return this.model.find();
    }
    async update(idpessoa, body) {
        const pessoa = await this.model.findOne({ where: { idpessoa } });
        if (!pessoa) {
            throw new common_1.NotFoundException(`Não foi encontrada uma pessoa com o id número ${idpessoa}`);
        }
        await this.model.update({ idpessoa }, body);
        return await this.model.findOne({ where: { idpessoa } });
    }
    async delete(idpessoa) {
        const pessoa = await this.model.findOne({ where: { idpessoa } });
        if (!pessoa) {
            throw new common_1.NotFoundException(`Não foi encontrada uma pessoa com o id número ${idpessoa}`);
        }
        await this.model.delete(idpessoa);
        return `A pessoa com id ${idpessoa} foi deletada com sucesso`;
    }
};
__decorate([
    (0, common_1.Post)(),
    __param(0, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [pessoa_schemas_1.PessoaSchema]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "create", null);
__decorate([
    (0, common_1.Get)(':idpessoa'),
    __param(0, (0, common_1.Param)('idpessoa', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "getOne", null);
__decorate([
    (0, common_1.Get)(),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", []),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "getAll", null);
__decorate([
    (0, common_1.Put)(':idpessoa'),
    __param(0, (0, common_1.Param)('idpessoa', common_1.ParseIntPipe)),
    __param(1, (0, common_1.Body)()),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number, pessoa_schemas_1.PessoaSchema]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "update", null);
__decorate([
    (0, common_1.Delete)(':idpessoa'),
    __param(0, (0, common_1.Param)('idpessoa', common_1.ParseIntPipe)),
    __metadata("design:type", Function),
    __metadata("design:paramtypes", [Number]),
    __metadata("design:returntype", Promise)
], PessoaController.prototype, "delete", null);
PessoaController = __decorate([
    (0, common_1.Controller)('/pessoa'),
    __param(0, (0, typeorm_1.InjectRepository)(pessoa_model_1.PessoaModel)),
    __metadata("design:paramtypes", [typeorm_2.Repository])
], PessoaController);
exports.PessoaController = PessoaController;
//# sourceMappingURL=pessoa.controller.js.map