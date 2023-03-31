import "../support/commands"
import "../fixtures/login.json"

describe('Login via API', () => {
    before(() => {
        cy.fixture('login').then((user) => {
        cy.loginViaApi(user.userEmail, user.userPassword)
        })
    })

    it("Should be able to login", () => {
        cy.url().should('include', '/main')
        cy.get('.user-profile').should('be.visible')
    });
})