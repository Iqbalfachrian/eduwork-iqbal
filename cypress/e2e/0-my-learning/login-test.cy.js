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
    
 })

