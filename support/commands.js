Cypress.Commands.add('login', (username, password) => {
    cy.clearCookies()
    cy.clearLocalStorage()
    
        cy.visit('http://zero.webappsecurity.com/login.html')

        cy.get('#user_login').clear().type(username)

        cy.get('input[name="user_password"]').clear().type(password)

        cy.get('input[name="submit"]').click() 

        cy.get('h2').should('contain.text', 'Cash Accounts')
        cy.wait(2000)
})