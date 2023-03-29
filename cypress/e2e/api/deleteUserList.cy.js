it.only('Delete user', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/540').then((response) => {
        expect(response.status).equal(204);
    })
})