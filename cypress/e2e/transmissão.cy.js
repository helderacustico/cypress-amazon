
Cypress._.times(1, () => {
    it('teste', () => {

        cy.intercept({
            method: 'PUT',
            url: 'https://siaf-plus-api-net.golerp.com.br/api/v1/faturamento/documentosaida/transmitir'
        }).as('getTransmicao')
        
        cy.viewport(1600, 880)
        /* cy.visit('https://erp.golerp.com.br/#!/login/');

        cy.get('#inputEmail').type('admin@casadodoutor.com.br')
        cy.get('#inputPassword').type('ads@2020')

        cy.get('#entrar').click()
        
        cy.wait(3000) */

        cy.visit('https://erp.golerp.com.br/#!/faturamento/documento-saida')

        cy.wait(2000)

        cy.get('[ng-click="ctrl.abrirMonitorNf()"]').click()

        cy.get(':nth-child(8) > td.text-center > .md-raised').click()
        
        cy.get('.swal2-confirm').should('be.visible')

        cy.wait(5000)
        
        cy.reload()

        cy.wait(2000)
    })
})