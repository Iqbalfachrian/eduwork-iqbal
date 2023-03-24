const { Given,  When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I go to Zero Online Banking dashboard', () => {
    cy.visit('http://zero.webappsecurity.com/index.html')
})

When('I fill in “zero” keyword in search bar on the web', () => {
    cy.get('#searchTerm').type('zero');
    cy.get('.search-query').should('be.visible').click();
    cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=zero')
})

Then ('I see all features with the keyword “zero” on Zero Online Banking', () => {
    cy.get('h2').should('contain.text', 'Search Results')
})