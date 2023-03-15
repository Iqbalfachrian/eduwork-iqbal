/// <reference types="cypress" />

describe('Browser actions', () => { 
    beforeEach('Open application', () => {
        cy.visit('http://zero.webappsecurity.com/login.html')
        cy.url().should('include', 'login.html')
    })

    it('Should fill username', () => {
        cy.get('#user_login').clear()
        cy.get('#user_login').type('username')
    });

    it('Should fill password', () => {
        cy.get('input[name="user_password"]').clear()
        cy.get('input[name="user_password"]').type('password')
    })

    //Soal latihan
    it('Should checkbox feature keep me signed in', () => {
        cy.get('input[type="checkbox"][name="user_remember_me"]').check()
    })

    it('Should try to login', () => {
        cy.fixture("user").then(({ username, password}) => {
           cy.visit('http://zero.webappsecurity.com/login.html');

            cy.get('#user_login').clear().type(username)

            cy.get('input[name="user_password"]').clear().type(password)

            cy.get('input[name="submit"]').click()

            cy.get('.alert-error').should('contain.text', 'Login and/or password are wrong.')
        })
    })

    it('Should send a passsword reset email when a user submits their email address', () => {
        cy.visit('http://zero.webappsecurity.com/forgot-password.html')
        cy.fixture('forgot_password').then((forgotPassword) => {
            cy.contains('So you forgot your password? Give us your email address and we will email it to you.')
            cy.get('input[name="email"').type(forgotPassword.email);
            cy.get('input[type="submit"').click()
        })
    });
    
 })

