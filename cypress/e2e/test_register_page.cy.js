/// <reference types="cypress"/>
const USER_DATA = require('../fixtures/new_user_data.json')
const ERROR_MESSAGES = require('../fixtures/error_messages.json')
import create_new_user from '../support/pages/create_new_user'


describe('Cadastro de usuário', () => {

    beforeEach(() => {
        cy.goToRegisterPage()
    })

    it('Validar campo nome vazio', () => {

        create_new_user.enterUserEmail(USER_DATA.validEmail)
        create_new_user.enterUserPassword(USER_DATA.validPassword)
        create_new_user.submitNewUser()
        create_new_user.validateErrorMsg(ERROR_MESSAGES.invalidFirstName)
    })

    it('Validar campo e-mail vazio', () => {

        create_new_user.enterUserName(USER_DATA.name)
        create_new_user.enterUserPassword(USER_DATA.validPassword)
        create_new_user.submitNewUser()
        create_new_user.validateErrorMsg(ERROR_MESSAGES.invalidEmail)
    })

    it('Validar campo e-mail inválido', () => {

        create_new_user.enterUserName(USER_DATA.name)
        create_new_user.enterUserEmail(USER_DATA.invalidEmail)
        create_new_user.enterUserPassword(USER_DATA.validPassword)
        create_new_user.submitNewUser()
        create_new_user.validateErrorMsg(ERROR_MESSAGES.invalidEmail)
    })

    it('Validar campo senha vazio', () => {

        create_new_user.enterUserName(USER_DATA.name)
        create_new_user.enterUserEmail(USER_DATA.validEmail)
        create_new_user.submitNewUser()
        create_new_user.validateErrorMsg(ERROR_MESSAGES.invalidPassword)
    })

    it('Validar campo senha Inválida', () => {

        create_new_user.enterUserName(USER_DATA.name)
        create_new_user.enterUserEmail(USER_DATA.validEmail)
        create_new_user.enterUserPassword(USER_DATA.invalidPassword)
        create_new_user.submitNewUser()
        create_new_user.validateErrorMsg(ERROR_MESSAGES.invalidPassword)
    })

    it('Validar Usuario Cadastrado com sucesso', () => {

        create_new_user.enterUserName(USER_DATA.name)
        create_new_user.enterUserEmail(USER_DATA.validEmail)
        create_new_user.enterUserPassword(USER_DATA.validPassword)
        create_new_user.submitNewUser()
        create_new_user.validateRegisterSuccessMsg()
        create_new_user.validateWelcomeMsg(USER_DATA.name)

    })
})
