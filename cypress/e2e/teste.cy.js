it('um teste ai', () => {

    cy.viewport(1600, 880)
    /* cy.visit('https://www.shoptime.com.br/')

    cy.get('[href="https://www.shoptime.com.br/produto/3409144704??chave=prf_hm_oh_0_5_0"] > .product__Wrapper-sc-1a8wuay-2 > .product__WrapperProduct-sc-1a8wuay-11 > .product__Price-sc-1a8wuay-6').invoke('text').then(($teste) => {
        cy.log($teste)
    })
 */

    
    cy.visit("https://learn.cypress.io/");

    cy.get("[data-test='courses-dropdown']")
      .invoke("attr", "aria-expanded")
      .should("eq", "false");

    cy.get("[data-test='courses-dropdown']")
      .click()
      .invoke("attr", "aria-expanded")
      .should("eq", "true");


})