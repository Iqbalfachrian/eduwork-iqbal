Cypress.Commands.add('loginViaApi', (
    email = Cypress.env('userEmail'),
    password = Cypress.env('userPassword')
) => {
    cy.request('POST', `${Cypress.env('apiURL')}/users/login`, {
        username: email,
        password: password
    }).then((response) => {
        cy.setCookie('sessionId', response.body.sesionId)
        cy.setCookie('userId', response.body.userId)
        cy.setCookie('userName', response.body.userName)
        cy.visit('/#/main')
    })
}
)