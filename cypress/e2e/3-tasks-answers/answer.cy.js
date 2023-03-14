/// <reference types="cypress" />

describe('My first Test', () => {
    it('clicking "type" shows the right headings', () => {
        cy.visit('https://example.cypress.io');
        
    //cy.pause()

        cy.contains('type').click();
        //cy.wait(2000);
        cy.url().should('include', '/commands/actions');
        
        cy.get('.action-email')
          .type('fake@email.com')
          .should('have.value', 'fake@email.com')
    });
})