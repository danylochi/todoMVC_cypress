import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Validar os filtros da aplicação após adição de itens', () =>{
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
        telaInicial.concluirItem()
    });

    
    it('Filtrar itens ativos', () => {
   
        telaInicial.filtrarItem("Active")

    });
    
    /*it('Filtrar itens concluidos', () => {
   
        telaInicial.concluirItem()

    })*/
    
});