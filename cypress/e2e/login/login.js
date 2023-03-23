const { Given, When, Then} = require('@badeball/cypress-cucumber-preprocessor');

Given('I open login page', () => {
    cy.visit('http://zero.webappsecurity.com/')
})

When('I submit Login ', () => {
    cy.get('#user_login').type(username)
    cy.get('#user_password]').type(password)
    cy.contains('Sign in').click()
})

Then('I should see home page', () => {
    cy.get('#homeMenu').should('be.visible')
})