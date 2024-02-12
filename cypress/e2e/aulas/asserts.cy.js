/// <reference types="cypress"/>

describe('Asserts', () => {
    it('Clicar botão login', () => {

        cy.visit("/")
            .get('.header-logo')

        cy.get('#top_header')
            .find('.fa-user')
            .click()

        cy.get('.account_form > h3')
            .should('be.visible')
            .should('contain', "Login")

        cy.get('.account_form > h3')
            .then((element) => {
                expect(element.text()).equal('Login')
                expect(element).to.be.visible

            })
    })
})