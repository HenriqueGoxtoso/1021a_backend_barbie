import BancoEmMemoria from "../infra/banco/banco-em-memoria";
import FilmeRepositorioInterface from "./filme-repositorio-interface";
export default class ListarFilme{
constructor(private filmeRepositorio:FilmeRepositorioInterface){}
public async listar():Promise<Filme[]>{
    return this.filmeRepositorio.listar()
}
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}