describe('Update user', () => {
    it('Successfully update user', () => {
        const user = {
            "firstName": "Iqbal",
            "lastName": "F",
            "job": "Senior QA Automation",
            "age": 27
        }
        cy.request('PUT', 'https://reqres.in/api/users/462', user).then((response) => {
            expect(response.status).eq(200);
            expect(response.body.firstName).to.eq(user.firstName)
        })
    });
})