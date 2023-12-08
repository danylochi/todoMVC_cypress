import telaInicial from '../../support/pageObjects/tela-inicial.pageObjects'

describe('Regressivo ToDo App', () =>{
    context('Validar a tela inicial', ()=>{
        beforeEach(() => {
            cy.visit('/')
        });

        it('Validar a aria label de input de dados', () => {
            telaInicial.validarInput("What needs to be done")
        });
    })
    context('Validar adição de itens', ()=>{
        beforeEach(() => {
            cy.visit('/')
        });   
        
        it('Adicionar mais de um Item na lista ', () => {
   
            var todoItens = ["Maçã", "Banana", "Cenoura"]
            todoItens.forEach(function(item, indice, array){
                telaInicial.inputText(item)
            })
           
            telaInicial.validarContador(3)
        });

    })
    context('Validar a conclusão de itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = [ "Maçã", "Banana", "Cenoura"]

            todoItens.forEach(function(Item, indice, array){
                telaInicial.inputText(Item)
       
            })
        })
        it('Concluir um item da lista de ToDo', () => {
   
            telaInicial.concluirItem()
            telaInicial.validarContador(2)

    
        })
    })



    context('Validar o filtro da aplicação', ()=>{
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = [ "Maçã", "Banana", "Cenoura"]
            todoItens.forEach(function(Item, indice, array){
                telaInicial.inputText(Item)
            })
            telaInicial.concluirItem()
        })
        it('Validar a lista de itens ativos', () => {

            telaInicial.filtrarItem("Active")
            telaInicial.validarSizeToDo(2)
    
        })
        it('Validar a lista de itens concluídos', () => {
            telaInicial.filtrarItem("Completed")
            telaInicial.validarSizeToDo(1)
    
        });
    })
    context('Validar a remoção de itens', ()=>{
        beforeEach(()=>{
            cy.visit('/')
            var todoItens = [ "Maçã", "Banana", "Cenoura"]
            todoItens.forEach(function(Item, indice, array){
                telaInicial.inputText(Item)
            })
    
        })
    
        
        it('Deleção de um Item da lista', () => {
       
            telaInicial.deletarItem()
            telaInicial.validarSizeToDo(2)
    
        });
    })
})