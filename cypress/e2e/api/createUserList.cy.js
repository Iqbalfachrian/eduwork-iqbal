
describe('Create New User', () => {
    it('Successfully create a new user', () => {
        const user = {
            "firstName": "Iqbal",
            "lastName": "Fachrian",
            "job": "Junior QA Automation",
            "age": 25
        }

        cy.request('POST', 'https://reqres.in/api/users', user).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body.firstName).to.eq(user.firstName);
            expect(response.body.lastName).to.eq(user.lastName);
            expect(response.body.job).to.eq(user.job);
            expect(response.body.age).to.eq(user.age);
        })
    });
})