import FilmeRepositorioInterface from "../../aplicacao/filme-repositorio-interface"

export default class BancoEmMemoria implements FilmeRepositorioInterface{
    public dados:any[] = []
    constructor(){}
    public salvar(input):Promise<boolean>{

        this.dados.push(input)
        return new Promise((resolve,reject)=>{
            setTimeout(()=>resolve(true), 1000)
        })
    }
}
type Filme = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}