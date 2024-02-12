import { faker } from '@faker-js/faker';

//elements
const elements = {
    buttons: {
        btn_register: '#btnRegister',
    },

    fields: {
        email_field: '#email',
        password_field: '#password',
        username_field: '#user',
    },

    messsages: {
        register_error_msg: '.errorLabel',
        register_success_msg: '#swal2-title',
        welcome_msg: '#swal2-html-container'
    }
}

// ações da página
export default {

    submitNewUser() {
        cy.get(elements.buttons.btn_register)
            .click()
    },

    enterUserName(user) {
        cy.get(elements.fields.username_field)
            .type(user)
    },

    enterUserEmail(email) {
        cy.get(elements.fields.email_field)
            .type(email)
    },

    enterUserPassword(pwd) {
        cy.get(elements.fields.password_field)
            .type(pwd)
    },

    validateErrorMsg(msg) {
        cy.get(elements.messsages.register_error_msg)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal(msg)
            })
    },

    validateRegisterSuccessMsg() {
        cy.get(elements.messsages.register_success_msg)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal('Cadastro realizado!')
            })
    },

    validateWelcomeMsg(username) {
        cy.get(elements.messsages.welcome_msg)
            .then((element) => {
                expect(element).to.be.visible
                expect(element.text()).to.be.equal(`Bem-vindo ${username}`)
            })

    }

}

