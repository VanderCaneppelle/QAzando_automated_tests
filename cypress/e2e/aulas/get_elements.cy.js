describe('Get Elements', () => {

    it('Obter elementos', () => {
        cy.visit('/')
            .get('.header-logo')

        //get +  contains  = diminui o escopo com get  e depois procura por texto
        cy.get('#top_header').as('header')
            .contains('Login')

        // get() + find()  - diminui o escopo com get e depois pesquisa por elemento na tela 
        cy.get('#top_header')
            .find('.fa-user')

        cy.get('@header')
            .find('.fa-user')


    })

})