/// <reference types="cypress" />

describe('Swag Labs test checkout features', () => {
    before(() => {
        cy.visit('https://www.saucedemo.com/')
    })

    it('Should to login with username that have been provided', () => {
        cy.fixture('swagLabUser').then(user => {
            const username = user.username
            const password = user.password

            cy.get('#user-name').type(username)
            cy.get('#password').type(password)
            cy.get('#login-button').click()
        })
    });

    it('Should show filter options High to low before pick an high item', () => {
        cy.wait(1000)
        cy.get('.product_sort_container').should('be.visible')
        cy.get('.product_sort_container').select('hilo')
    });

    it('Should pick a product name Sauce Labs Fleece Jacket', () => {
        cy.contains('Sauce Labs Fleece Jacket').click()
        cy.url().should('include', 'inventory-item.html?id=5')
    });

    it('Should an item add to cart', () => {
        cy.wait(1000)
        cy.contains('Add to cart').click()
        cy.url().should('include', 'inventory-item.html?id=5')
    });

    it('Should go to shopping cart', () => {
        cy.wait(1000)
        cy.get('.shopping_cart_link').click()
    });

    it('Should be checkout step one', () => {
        cy.contains('Checkout').click()
        cy.url().should('include', 'checkout-step-one.html')
    });

    it('Should filled a step two (shipping information)', () => {
        cy.get('#first-name').type('Iqbal')
        cy.get('#last-name').type('Fachrian')
        cy.get('#postal-code').type('15415')

        cy.contains('Continue').click()
        cy.url().should('include', 'checkout-step-two.html')
    });

    it('Should be checkout to completed', () => {
        cy.contains('Finish').click()
        cy.url().should('include', 'checkout-complete.html')
    });

    it('Should be back to Home page', () => {
        cy.contains('Back Home').click()
        cy.url().should('include', 'inventory.html')
    });
})