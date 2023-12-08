import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Deletar Itens da Lista', () =>{
    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - ANTES DE CADA TESTE
     */

    beforeEach(()=>{
        cy.visit('/')
        var todoItens = [ "Maçã", "Banana", "Cenoura"]
        todoItens.forEach(function(Item, indice, array){
            telaInicial.inputText(Item)
        })

    });

    
    it('Deleção de um Item da lista', () => {
   
        telaInicial.deletarItem()

    });
    
    /*it('Filtrar itens concluidos', () => {
   
        telaInicial.concluirItem()

    })*/
    
});