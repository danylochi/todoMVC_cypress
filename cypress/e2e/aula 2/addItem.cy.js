import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Adicionar Itens na minha lista', () =>{
    /**
     * DADO - BEFORE - ANTES DO PRIMEIRO TESTE
     * BEFORE EACH - ANTES DE CADA TESTE
     */
    beforeEach(()=>{
        cy.visit('/')
    })

    it('Adicionar Itens na lista ', () => {
        telaInicial.inputText("dado1")
        telaInicial.inputText("dado2")
  

    })
    
   /it('Adicionar mais de um Item na lista ', () => {
   
        var todoItens = ["Maçã", "Banana", "Cenoura"]
        todoItens.forEach(function(item, indice, array){
            telaInicial.inputText(item)
        })

    })
    
});