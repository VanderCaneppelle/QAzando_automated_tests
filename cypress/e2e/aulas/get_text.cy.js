describe('Get Texts', () => {

    it('Obter textos de elementos', () => {
        cy.visit('/')
            .get('.header-logo')

        cy.get('.top_header_left > p')
            .then((element) => {
                console.log(element.text())

            })

    })

})