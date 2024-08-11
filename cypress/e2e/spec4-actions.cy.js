describe('cypress actions spec', () => {

  beforeEach(() => {
    // cy.visit('http://127.0.0.1:8080/')
  });

  it('click', () => {     // links, buttons
    cy.visit('http://127.0.0.1:8080/dashboard.html')
    cy.contains('Logout').wait(4000).click();
    // .click('left');
    // cy.get('.postItem').first().click(100, 50);
  });

  it.only('dblclick', () => {     // links, buttons
    cy.visit('http://127.0.0.1:8080/dashboard.html').wait(4000)
    cy.get('.postItem').first().wait(3000).dblclick().wait(4000);
    cy.url().then((urlText) => {
      expect(urlText).to.contain('postId=1')
    });
    // rightclick
  });

  it('check/uncheck', () => {   // checkbox & radio buttons
    cy.get('input[type=checkbox]').check().wait(4000).uncheck()
    cy.get('input[type=radio]').as('radios')
    cy.get('@radios').should('have.length', 2);
    // cy.get('@radios').last().check()
    cy.get('@radios').check('male')
  });

  it('type/clear', () => {   //inputs, textarea
    cy.get('#email').type('email@domain.com').wait(4000).clear()
  });

  it('select', () => {   // select dropdown
    cy.visit('http://127.0.0.1:8080/dashboard.html').wait(4000);
    cy.get('#paginationSelection').as('dropdown')
    cy.get('.postItem').should('have.length', 5);
    cy.get('@dropdown').select('10').wait(3000);
    cy.get('.postItem').should('have.length', 10);
    // cy.get('#email').type('email@domain.com').wait(4000).clear()
  });
})