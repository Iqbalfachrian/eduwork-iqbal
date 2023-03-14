/// <reference types="cypress" />

describe('Browser actions', () => {
    beforeEach('Open application', () => {
        cy.visit('https://www.saucedemo.com/')
        cy.url().should('include', 'saucedemo.com')
    })


    it('Should fill username', () => {
        cy.get('#user-name').clear()
        cy.get('#user-name').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name="password"]').clear()
        cy.get('input[name="password]').type('password')
    });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.username

            cy.get('#user-name').clear()
            cy.get('#user-name').type(username)

            cy.get('input[name="password"]').clear()
            cy.get('input[name="password"]').type(password)

            cy.get('input[name="login-button"]').click()

            cy.get('.error-message-container error').should('contain.text', 'Epic sadface: Username and password do not match any user in this service')
        })
    });
})