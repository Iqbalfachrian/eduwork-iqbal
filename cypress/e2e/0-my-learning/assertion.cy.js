/// <reference types="cypress" />

describe('Browser Actions', () => { 

    beforeEach('Open application', () => {
        cy.visit('https://example.com')
    })
  

    it('Should check correct url', () => {
        cy.url().should('include', 'example.com')
    });

    it('Should check for correct element on the page', () => {
        cy.get('h1').should('be.visible');
    })
})