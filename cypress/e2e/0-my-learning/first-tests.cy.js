/// <reference types="cypress" />

describe('My first tests', () => {
    it('Visit the Kitchen sink', () => {
        cy.visit('https://example.cypress.io');
        cy.get('p').contains('Commands drive your tests in the browser like a real user would. They let you perform actions like typing, clicking, xhr requests, and can also assert things like "my button should be disabled".');

        cy.contains('children').click();
        cy.url().should('include', '/commands/traversal')
    });
});