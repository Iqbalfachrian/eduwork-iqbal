it.only('Delete user', () => {
    cy.request('DELETE', 'https://reqres.in/api/users/540').should((response) => {
        expect(response.status).equal(204);
        expect(response.body).to.be.empty
    });
});