/// <reference types="cypress" />

import "../support/commands"

describe('Login logout test', () => {
    before(() => {
        cy.visit('http://zero.webappsecurity.com/')
        cy.get('#signin_button').click()
    })

    it('Should try to login with invalid data', () => {
        cy.get('#login_form').should('be.visible')
        cy.get('#user_login').type('invalid username')
        cy.get('#user_password').type('invalid password')
        cy.get('input[name="submit"]').click()
    });
    
    it('Should display an error message', () => {
        cy.visit('http://zero.webappsecurity.com/login.html?login_error=true')
        cy.get('.alert-error').should('be.visible').and('contain.text',  'Login and/or password are wrong')
    });
    
    it('Should login to application with valid data', () => {
        cy.login('username', 'password')
    })
    
    it('Should logout from apps', () => {
            //cy.visit('http://zero.webappsecurity.com/index.html')

            cy.contains('username').click()
            cy.get('#logout_link').click();
            cy.get('strong').should('contain.text', 'Home')
        });
    })

//Below is task section 5
    
// it('Should show the result page', () => {
//     cy.visit('http://zero.webappsecurity.com/search.html?searchTerm=online')
//     cy.wait(2000)
//     cy.get('h2').should('contain.text', 'Search Results:')
// });

// it('Should click Zero Free access to Online banking', () => {
// cy.visit('http://zero.webappsecurity.com/online-banking.html')
// cy.wait(2000)
// cy.get('#pay_bills_link').click();

// })

// it('Should visit pay-bills page', () => {
// cy.visit('http://zero.webappsecurity.com/bank/pay-bills.html')
// }) 


