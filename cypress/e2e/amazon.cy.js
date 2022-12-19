import data from "../pages/data"

describe('deve realizar login', function(){

    

    it('case 1', function(){
        
        //acessa a pagina principal
        cy.viewport(1600, 880)
        cy.visit('https://www.amazon.com.br/')
        cy.wait(4000)
        //realiza login
        cy.get('#nav-link-accountList').click()
        
        cy.get('#ap_email').type(data.user)
    
        cy.get('.a-button-inner > #continue').click()

        cy.get('#ap_password').type(data.senha)
        cy.get('#signInSubmit').click()

        cy.get('#nav-link-accountList-nav-line-1').should('have.text',`Olá, ${data.meuPrimeiroNome}`)

        cy.get('#twotabsearchtextbox').type('echo dot')
        cy.get('#nav-search-submit-button').click()

        cy.wait(3000)

        cy.get('div#search div:nth-child(3) > div > div > div > div > div.a-section.a-spacing-small.puis-padding-left-small.puis-padding-right-small > div.a-section.a-spacing-none.a-spacing-top-small.s-title-instructions-style > h2 > a > span')
            .should('be.visible')
            .click()
        
        const a = cy.get('[data-asin="B084DWCZY6"] > .sg-col-inner > .s-widget-container > .s-card-container > .a-spacing-base > .a-spacing-small > .s-price-instructions-style > .a-row > :nth-child(1) > .a-price > [aria-hidden="true"] > .a-price-whole').invoke('text')

        cy.log(a)

            /* 
        
        cy.get('#add-to-cart-button').click()
        cy.get('#sc-buy-box-ptc-button > .a-button-inner > .a-button-input').click()

        cy.get('#address-ui-widgets-enterAddressPhoneNumber').type(data.telefone)

        cy.get('#address-ui-widgets-buildingNumber').type('444')

        cy.get('#address-ui-widgets-enterAddressPostalCode').type(data.cep)

        cy.get('#address-ui-widgets-streetName').type(data.endereco)

        cy.get('#address-ui-widgets-buildingNumber').type(data.numeroEndereco)

        cy.get('#address-ui-widgets-neighborhood').type(data.bairro)

        cy.get('#address-ui-widgets-use-as-my-default').click()

        cy.get('#address-ui-widgets-form-submit-button > .a-button-inner > .a-button-input').click() */
        
    })

})