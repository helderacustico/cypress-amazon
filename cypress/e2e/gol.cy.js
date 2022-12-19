
Cypress._.times(100, () => {
    it('teste', () => {
        
        cy.viewport(1600, 880)
        /* cy.visit("https://erp-test.golerp.com.br/");

        cy.get('#inputEmail').type('teste@teste.com.br')
        cy.get('#inputPassword').type('1234')

        cy.get('#entrar').click()

        cy.get('.ui-select-match > .form-control').click()

        cy.get('#ui-select-choices-row-0-0 > .ui-select-choices-row-inner > .ng-binding').click()

        cy.get('#confirme-filial').click() */

        cy.visit('https://erp-test.golerp.com.br/#!/faturamento/documento-saida/cadastrar')
        cy.wait(5000)

        /* cy.get('.md-warn').click() */

        cy.get('#documentoDataHoraSaida').click()
        cy.get('.datepicker-days > .table-condensed > tfoot > :nth-child(1) > .today').click()

        cy.get('#fisOperacao > .ui-select-match > .form-control').click()
        
        cy.get('#fisOperacao > .ui-select-search').type('NOTA DE CONTROLE')
        cy.get('.ui-select-choices-row-inner > .text-truncate').click()

        cy.get('#fatVendedor > .ui-select-match > .form-control').type('HELDER')
        cy.get('.ui-select-choices-row-inner > .text-truncate').click()

        cy.get('#fatCondicaopagamento > .ui-select-match > .form-control').type('DINHEIRO')
        cy.get('#ui-select-choices-row-23-0 > .ui-select-choices-row-inner').click()

        
        cy.get(':nth-child(2) > .col-md-14 > .layout-row > .layout-column > :nth-child(1) > .form-group > .ui-select-container > .select2-choice > .select2-chosen.ng-binding').type('monitor')
        cy.get('.ui-select-highlight').click()

        
        cy.get('[ng-click="ctrl.vendeItem()"]').click()
        cy.wait(2000)

        cy.get('.col-md-24 > .pull-right > .md-raised').click()
        cy.get('[ng-click="ctrl.salvarCadastro()"]').click()

        cy.get('.layout-row > .md-accent').click()

        cy.get('[ng-click="ctrl.salvarCadastro()"]').click()

        cy.get('.layout-row > .md-raised').click()

        cy.get(':nth-child(4) > .md-raised').click()

        cy.get(':nth-child(1) > .toast > [ng-switch=""] > .toast-title').should('have.text','SUCESSO')

                       
        
    })
})