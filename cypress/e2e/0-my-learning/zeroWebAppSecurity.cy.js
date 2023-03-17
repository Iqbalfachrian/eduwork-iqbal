/// <reference types="cypress" />

import "../../support/commands";

describe('Browser actions', () => { 
    it('Open Website', () => {
        cy.visit('http://zero.webappsecurity.com/')
    })

    // it('Should fill username', () => {
    //     cy.get('#user_login').clear()
    //     cy.get('#user_login').type('username')
    // });

    // it('Should fill password', () => {
    //     cy.get('input[name="user_password"]').clear()
    //     cy.get('input[name="user_password"]').type('password')
    // })

    //Soal latihan
    // it('Should checkbox feature keep me signed in', () => {
    //     cy.get('input[type="checkbox"][name="user_remember_me"]').check()
    // })

    it('Should try to login', () => {
        cy.fixture("user").then(() => {
    
            cy.get('#signin_button').click()    

            cy.get('#user_login').clear().type('username')

            cy.get('input[name="user_password"]').clear().type('password')

            cy.get('input[name="submit"]').click() 
            
            cy.visit('http://zero.webappsecurity.com/index.html')
        })
    })


    it('Should click Online banking Button', () => {
        cy.get('#onlineBankingMenu').click()
    });

    it('Should click Pay Bills button', () => {
        cy.get('#pay_bills_link').should('be.visible').click()
    }) 

    //custom commands
    it('Should fill in payment details', () => {
        cy.fillPaymentDetails('bofa', '2', '100000', '2023/03/17', 'Saving for this month') 
    })


    // it('Should send a passsword reset email when a user submits their email address', () => {
    //     cy.visit('http://zero.webappsecurity.com/forgot-password.html')
    //     cy.fixture('forgot_password').then((forgotPassword) => {
    //         cy.contains('So you forgot your password? Give us your email address and we will email it to you.')
    //         cy.get('input[name="email"').type(forgotPassword.email);
    //         cy.get('input[type="submit"').click()
    //     })
    // });

    // it('Should navigate to the Pay Bills page', () => {
    //     cy.payBills();
    //     cy.url().should("include", "/bank/pay-bills.html")
    // });
    
 })

