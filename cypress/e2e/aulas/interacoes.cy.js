describe('Interações', () => {

    // it('Digitar em um campo', () => {
    //     cy.visit('/')
    //         .get('.header-logo')

    //     cy.get('.form-control')
    //         .type('vandercaneppelle@outlook.com{enter}')

    // })
    // click , dblclick, rightclick
    // it('Clicar em login', () => {
    //     cy.visit('/')
    //         .get('.header-logo')

    //     cy.get('.fa-user')
    //         .click()
    // })

    // click por coordenadas x,y
    // it('clicando por coordenadas', () => {
    //     cy.visit('/')

    //     cy.get('.fa-user')
    //         .click(100, 100, { force: true })

    // })

    // it('Selecionar dropdown', () => {
    //     cy.visit('/')
    //         .get('.header-logo')

    //     cy.get('.footer_one_widget')
    //         .contains('Checkout View Two')
    //         .click()

    //     cy.get('.country_option')
    //         .select('Colombia')

    // })

    it('Selecionar radio buttons and checkbox', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.footer_one_widget')
            .contains('Checkout View One')
            .click()

        cy.get('#materialUnchecked')
            .check()
            .uncheck()

        cy.get('#html')
            .check()

        cy.get('#javascript')
            .check()
    })

    it('Selecionar elemntos com find', () => {
        cy.visit('/')
        cy.get('#top_header')
            .find('.fa-user')
            .click()
    })

})
