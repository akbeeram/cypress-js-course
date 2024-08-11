describe('Login Page', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/');
  });

  it('should have 3 inputs', () => {
    cy.get('input').should('have.length', 3);
    // cy.get('input').then((elem) => {
    //   console.log(elem);
    //   expect(elem).to.be('length', 3)
    // });
  });
  describe('validate fields', () => {
    it('should have email field', () => {
      cy.get('#email').should('exist');
    });
    it('should have username field', () => {
      cy.get('#username').should('exist');
    });
    it('should have password field', () => {
      cy.get('#password').should('exist');
    });
  });
  describe('validate btn', () => {
    it('should have register btn', () => {
      cy.get('#loginBtn').should('exist');
    });
    it('should be disabled', () => {
      cy.get('#loginBtn').then((r) => {
        expect(r[0].getAttribute('disabled')).to.equal('true');
      });
    });
  });
  describe('enter values to login', () => {
    it('enter all values', () => {
      cy.get('#email').type('email');
      cy.get('#username').type('username');
      cy.get('#password').type('passadsfsdfword');
      cy.get('#loginBtn').then((r) => {
        expect(r[0].getAttribute('disabled')).to.be.null;
      });
    });
  });
});