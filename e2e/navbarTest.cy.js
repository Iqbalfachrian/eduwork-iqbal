/// <reference types="cypress" />

describe('Navbar Test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    it('Should display Online Bankings', () => {
        cy.contains('Online Banking').click()
        cy.url().should('include', 'online-banking.html')
    });

    it('Shoud display Account Summary', () => {
        cy.contains('Account Summary').click()
        cy.url().should('include', 'login.html')
    });

    it('Should login before access all features', () => {
        
        cy.fixture('user').then((user) => {
            const username = user.username
            const password = user.password

        cy.get('#user_login').type(username)

        cy.get('input[name="user_password"]').type(password)

        //cy.contains('Sign in').click()
        
        cy.get('input[name="submit"]').click() 

        cy.visit('http://zero.webappsecurity.com/index.html')

    });
})

    it('Should display feedback content', () => {
        cy.contains('Feedback').click()
        cy.url().should('include', 'feedback.html')
    });

    it('Should filled blank feedback column content', () => {
        cy.get('#name').type('Iqbal Fachrian')
        cy.get('#email').type('iqbalfachrian@gmail.com')
        cy.get('#subject').type('Great apps')

        cy.get('#comment').type('I like Zero Apps security. Friendly user interface, easy to use, and all features are great. Also, this app is seamless, which is like moving to another menu.')

        cy.contains('Send Message').click()
        
    });

    it('Should display homepage content', () => {
        cy.contains('Zero Bank').click()
        cy.url().should('include', 'index.html')
    });

    it('Should log out apps', () => {
        cy.contains('username').click()
        cy.get('#logout_link').click();
        cy.get('strong').should('contain.text', 'Home')
    });
})