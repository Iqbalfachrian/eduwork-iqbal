describe('Create New User', () => {
    it('Successfully create a new user', () => {
        const user = {
            "name": "Iqbal",
            "job": "Junior QA Automation"
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.name).to.eq(user.name);
            expect(response.body.job).to.eq(user.job);
        })
    });
})