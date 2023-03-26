const URL = 'http://zero.webappsecurity.com/index.html';
const SEARCHTERM = '#searchTerm';
const SEARCHQUERY = '.search-query';
const urlZero = 'http://zero.webappsecurity.com/search.html?searchTerm=zero';

class searchPage {
    static visit() {
        cy.visit(URL)
    }

    static fillSearchColumn(zero) {
        cy.get(SEARCHTERM).type(zero)
    }

    static search() {
        cy.get(SEARCHQUERY).click()
    }

    static result() {
        cy.visit(urlZero)
    }
}

export default searchPage;