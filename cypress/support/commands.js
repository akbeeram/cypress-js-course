// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

Cypress.Commands.add('selectFirstRadio', () => {
    cy.get('input[type=radio]').first().check();
})
Cypress.Commands.add('selectRadioWithLabel', (label) => {
    cy.get('input[value=' + label + ']').check();
})
Cypress.Commands.add('loginToMyApp', (email, username, pwd) => {
    cy.get('#email').type(email).wait(500);
    cy.get('#username').type(username).wait(500);
    cy.get('#password').type(pwd).wait(500);
    cy.selectFirstRadio().wait(500);
    cy.get('#loginBtn').click().wait(500);
});
Cypress.Commands.add('openTestApp', (appName) => {
    cy.contains(appName).click();
})