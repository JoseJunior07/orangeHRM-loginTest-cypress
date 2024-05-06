import userData from '../fixtures/users/user-data.json'
import LoginPage from '../pages/loginPage.js'
import DashboardPage from '../pages/dashboardPage.js'
import MenuPage from '../pages/menuPage.js'

const loginPage = new LoginPage()
const dashboardPage = new DashboardPage()
const menuPage = new MenuPage()

describe('Orange HRM Tests', () => {

  const selectorsList = {

    
    firstNameField: '[name="firstName"]',
    lastNameField: '[name="lastName"]',
    genericField: '.oxd-input--active',
    dateField: '[placeholder="yyyy-dd-mm"]',
    dateCloseButton: '.--close',
    genericComboBox: '.oxd-select-text--arrow',
    secondItemComboBox: '.oxd-select-dropdown > :nth-child(26)',
    thirdItemComboBox: '.oxd-select-dropdown > :nth-child(2)',
    submitButton: '[type="submit"]'
  }


  it.only('User Info Update - Success', () => {
    loginPage.accessLoginPage()
    loginPage.loginWithAnyUser(userData.userSuccess.username, userData.userSuccess.password)

    dashboardPage.checkDashboardPage()

    menuPage.accessMyInfo()

    
    // cy.get(selectorsList.myInfoButton).click()
    // cy.get(selectorsList.firstNameField).clear().type('FirstNameTest')
    // cy.get(selectorsList.lastNameField).clear().type('lastNameTest')
    // cy.get(selectorsList.genericField).eq(3).clear().type('EmployeeId')
    // cy.get(selectorsList.genericField).eq(4).clear().type('OtherIdTest')
    // cy.get(selectorsList.genericField).eq(5).clear().type('LicenseNumber')
    // cy.get(selectorsList.dateField).eq(0).clear().type('2025-05-02')
    // cy.get(selectorsList.dateCloseButton).click()
    // cy.get(selectorsList.genericComboBox).eq(0).click()
    // cy.get(selectorsList.secondItemComboBox).click()
    // cy.get(selectorsList.genericComboBox).eq(1).click()
    // cy.get(selectorsList.thirdItemComboBox).click()
    // cy.get(selectorsList.submitButton).eq(0).click()
    // cy.get('body').should('contain', 'Successfully Updated') 
  })
  
  it('Login - Fail', () => {
    cy.visit('/auth/login')
    cy.get(selectorsList.usernameField).type(userData.userFail.username)
    cy.get(selectorsList.passwordField).type(userData.userFail.password)
    cy.get(selectorsList.loginButton).click()
    cy.get(selectorsList.wrongCredentialAlert)
    
  })
})