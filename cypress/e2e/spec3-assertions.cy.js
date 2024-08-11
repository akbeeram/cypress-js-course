describe('template spec', () => {

  // common assertions:
  // length
  // value
  // class
  // text content
  // visibility
  // existence
  // state
  // css
  // disabled

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/dashboard.html');
  });

  it('passes', () => {
    // email input
    cy.get('input#email').as('emailInput');
    cy.get('@emailInput')
      .should('exist')
      .should('be.enabled')
      .should('be.focused');
    // err block
    cy.get('#errMsgDiv').as('errDiv');
    cy.get('@errDiv')
      .should('not.be.visible');
    // enter email
    cy.get('@emailInput').type('dummy email');
    // check for validations
    cy.get('@errDiv')
      .should('be.visible')
      .should('have.text', 'Please enter a valid email');
    cy.get('@emailInput')
      .should('have.css', 'border-color', 'rgb(255, 0, 0)')
    // enter correct value
    cy.get('@emailInput').clear();
    cy.get('@emailInput').type('dummy@email');
    // check for validations
    cy.get('@errDiv')
      .should('not.be.visible');
  });

  it('sample test', () => {
    cy.visit('https://dev.to/');
    cy.get('.default-navigation-links li').as('navList');
    cy.get('@navList').should('have.length', 13);
    cy.get('@navList').eq(0).then((el) => {
      expect(el[0].innerText).to.contain('Home')
    });
  });
})