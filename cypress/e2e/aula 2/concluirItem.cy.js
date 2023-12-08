import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Concluir Itens na minha lista', () =>{
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
    })


    
    it('Concluir um item da lista de toDO', () => {
   
        telaInicial.concluirItem()

    })
    
});