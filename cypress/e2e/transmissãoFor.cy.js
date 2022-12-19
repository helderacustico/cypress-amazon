require('cypress-plugin-tab');


Cypress._.times(1, () => {
    it('teste', () => {

        const teste = {
            serie: 7,
            numero: 9319
        }

                
        cy.viewport(1600, 880)
        /* cy.visit('https://erp.golerp.com.br/#!/login/');

        cy.get('#inputEmail').type('admin@casadodoutor.com.br')
        cy.get('#inputPassword').type('ads@2020')

        cy.get('#entrar').click()
        
        cy.wait(3000) */

        cy.visit('https://erp.golerp.com.br/#!/faturamento/documento-saida')

        cy.get('[ng-show="ctrl.paginacao"] > .md-raised > span.ng-scope').click()

        cy.get('[ui-nome="documentoSerie"] > .ui-select-container').type('7{enter}')
        cy.get('[ui-nome="documentoNumero"] > .ui-select-container > :nth-child(1) > .ui-select-search').type(teste.numero).tab()

        cy.get('#md-filter-btn').click()

        cy.get('.md-sidenav-backdrop').click()
        
        cy.get('[aria-label="Column Transmissão, Value 1 - NÃO TRANSMITIDO"]').dblclick().wait(5000)

        cy.get('.md-menu > .md-raised').click()

        cy.get('._md > md-menu-item.ng-scope > .md-button').click()

        cy.wait(5000)

        cy.get('#swal2-title').should('be.visible')

        
        cy.reload()

        cy.wait(5000)

        cy.get(':nth-child(3) > .ng-scope > .ng-binding').click()

        cy.get('.md-warn').click()

    })
})