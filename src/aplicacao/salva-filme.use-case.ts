import BancoEmMemoria from "../infra/banco/banco-em-memoria"
class SalvaFilme{
    private banco = new BancoEmMemoria()
    constructtor(){}
    public execute(input:Input):Output|undefined{
        const {id, titulo, descricao, foto} = input
        //salvar no banco
        const resultado = this.banco.salvar({id,titulo,descricao,foto})
        if(!resultado) return undefined 
        return {id, titulo, descricao, foto}
        //retornar
        
    }
}
export default SalvaFilme


type Input = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}

type Output = {
    id:number,
    titulo:string,
    descricao:string,
    foto:string
}