/// <reference types="cypress" />


describe('Visit Saucedemo website', () => {
    it("Visit the website", () => {
        cy.visit('https://www.saucedemo.com/')
    })


    it('Should fill username', () => {
        cy.get("#user-name").should('be.visible').clear().type('standard_user')
    });

    it('Should fill password', () => {
        cy.get('input[name="password"]').clear().type('secret_sauce')
    });

    it('Should try to login', () => {
        cy.fixture("user").then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').clear().type(username)

            cy.get('input[name="password"]').clear().type(password)

            cy.get('input[name="login-button"]').click()

            // cy.get('.error-message-container, .error').should('contain.text','Epic sadface: Username and password do not match any user in this service')
        })
    });


    it('Logs the user out', () => {
        cy.fixture("logout").then((logout) => {
            cy.get('#react-burger-menu-btn').click();
            cy.get('.bm-menu-wrap').should('be.visible');
            cy.get(logout.selector).click();
            cy.url().should('include', 'https://www.saucedemo.com/');
        })
    })
})