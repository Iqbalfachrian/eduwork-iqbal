/// <reference types="cypress" />
describe('My first Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');

        //cy.pause()

        cy.contains('type').click() 

        //should be on a new URL which includes '/commands/actions'
        cy.url().should('include', '/commands/utilities');
        //get an input, type into it and verify that the values has been updated
        cy.get('.action-email')
          .type('dummy@email.com')
          .should('have.value', 'dummy@email.com')
    })
})