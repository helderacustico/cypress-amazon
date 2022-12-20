require('cypress-plugin-tab');



it('Realiza transmissão de docs', () => {

    const transmissao = [              
                   
        
        {numero: '9000'},
        {numero: '9001'},
        {numero: '9002'},
        {numero: '9003'},
        {numero: '9004'},
        {numero: '9005'},
        {numero: '9006'},
        {numero: '9007'},
        {numero: '9008'},
        {numero: '9009'},
        {numero: '9010'},
        {numero: '9011'},
        {numero: '9012'},
        {numero: '9013'},
        {numero: '9014'},
        {numero: '9015'},
        {numero: '9016'},
        {numero: '9017'},
        {numero: '9018'},
        {numero: '9019'},
        {numero: '9020'},
        {numero: '9021'},
        {numero: '9022'},
        {numero: '9023'},
        {numero: '9024'},
        {numero: '9025'},
        {numero: '9026'},
        {numero: '9027'},
        {numero: '9028'},
        {numero: '9029'},
        {numero: '9030'},
        {numero: '9031'},
        {numero: '9032'},
        {numero: '9033'},
        {numero: '9034'},
        {numero: '9035'},
        {numero: '9036'},
        {numero: '9037'},
        {numero: '9038'},
        {numero: '9039'},
        {numero: '9040'},
        {numero: '9041'},
        {numero: '9042'},
        {numero: '9043'},
        {numero: '9044'},
        {numero: '9045'},
        {numero: '9046'},
        {numero: '9047'},
        {numero: '9048'},
        {numero: '9049'},
        {numero: '9050'},
        {numero: '9051'},
        {numero: '9052'},
        {numero: '9053'},
        {numero: '9054'},
        {numero: '9055'},
        {numero: '9056'},
        {numero: '9057'},
        {numero: '9058'},
        {numero: '9059'},
        {numero: '9060'},
        {numero: '9061'},
        {numero: '9062'},
        {numero: '9063'},
        {numero: '9064'},
        {numero: '9065'},
        {numero: '9066'},
        {numero: '9067'},
        {numero: '9068'},
        {numero: '9069'},
        {numero: '9070'},
        {numero: '9071'},
        {numero: '9072'},
        {numero: '9073'},
        {numero: '9074'},
        {numero: '9075'},
        {numero: '9076'},
        {numero: '9077'},
        {numero: '9078'},
        {numero: '9079'},
        {numero: '9080'},
        {numero: '9081'},
        {numero: '9082'},
        {numero: '9083'},
        {numero: '9084'},
        {numero: '9085'},
        {numero: '9086'},
        {numero: '9087'},
        {numero: '9088'},
        {numero: '9089'},
        {numero: '9090'},
        {numero: '9091'},
        {numero: '9092'},
        {numero: '9093'},
        {numero: '9094'},
        {numero: '9095'},
        {numero: '9096'},
        {numero: '9097'},
        {numero: '9098'},
        {numero: '9099'},
        {numero: '9100'},
        {numero: '9101'},

        

    ]

    transmissao.forEach(function(trm){

            
        cy.viewport(1600, 880)
        /* cy.visit('https://erp.golerp.com.br/#!/login/');

        cy.get('#inputEmail').type('admin@casadodoutor.com.br')
        cy.get('#inputPassword').type('ads@2020')

        cy.get('#entrar').click()
        
        cy.wait(3000) */

        cy.visit('https://erp.golerp.com.br/#!/faturamento/documento-saida')

        cy.wait(5000)

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
    })

})
