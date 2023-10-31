import { describe, test, expect } from "vitest";
import SalvaFilme from './salva-filme.use-case'
describe("testando", ()=>{
    test("Deve salvar um filme", ()=>{
        //entrada
        const filme ={
        id:1,
        titulo:"trembolona",
        descricao:"tome o suco",
        foto:"test"
    }
        //processamento
        const salvaFilme = new SalvaFilme()
        const {id, titulo, descricao, foto} = filme
        const resultado = salvaFilme.execute({id,titulo,descricao,foto})
        //resultado
        expect(resultado).toEqual(filme)
    })
})