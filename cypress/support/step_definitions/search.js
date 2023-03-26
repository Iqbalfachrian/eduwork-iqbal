import searchPage from '../../e2e/pages/search.page';

const { Given,  When, Then } = require('@badeball/cypress-cucumber-preprocessor');

Given('I go to Zero Online Banking dashboard', () => {
    searchPage.visit()
})

When('I fill in “zero” keyword in search bar on the web', () => {
    searchPage.fillSearchColumn('zero');
    searchPage.search()
    searchPage.result()
})

Then ('I see all features with the keyword “zero” on Zero Online Banking', () => {
    cy.get('h2').should('contain.text', 'Search Results')
})