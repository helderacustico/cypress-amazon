require('cypress-plugin-tab');

describe('Transmissões', () => {

    
    before(() => {
        
        cy.visit('https://erp.golerp.com.br/#!/login/');

        cy.get('#inputEmail').type('admin@casadodoutor.com.br')
        cy.get('#inputPassword').type('ads@2020')

        cy.get('#entrar').click()
        
        cy.wait(3000)

        cy.get('.container > :nth-child(1)').should('be.visible')

        cy.visit('https://erp.golerp.com.br/#!/faturamento/documento-saida')
    
    })
   
    it('Realiza transmissão de docs 4', () => {

        const transmissao = [
     
            {numero: '8987'},
            {numero: '8988'},
            {numero: '8989'}, 

        ]
        
        transmissao.forEach(function(trm){         
                    
            cy.wait(12000)

            cy.get('[ng-show="ctrl.paginacao"] > .md-raised > .fa').click()

            cy.get('[ui-nome="documentoSerie"] > .ui-select-container').type('7{enter}')
            cy.get('[ui-nome="documentoNumero"] > .ui-select-container > :nth-child(1) > .ui-select-search').type(trm.numero).tab()

            cy.get('#md-filter-btn').click()

            cy.get('.md-sidenav-backdrop').click()
            
            cy.get('[aria-label="Column Transmissão, Value 1 - NÃO TRANSMITIDO"]').dblclick().wait(5000)

            cy.get('.md-menu > .md-raised').click()

            cy.get('._md > md-menu-item.ng-scope > .md-button').click()

            cy.wait(5000)

            cy.get('#swal2-title').should('be.visible')
            
            cy.reload()

            cy.wait(12000)

            cy.get(':nth-child(3) > .ng-scope > .ng-binding').click()

            cy.wait(3000)

            cy.get('.md-warn').click()

            cy.clearLocalStorage()
            cy.clearCookies()

            cy.log('Doc Transmitido')
        })       
    })

    
})
