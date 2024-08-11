
Cypress.Commands.add('selectLastRadio', () => {
  cy.get('input[type=radio]').last().check();
});

describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://127.0.0.1:8080');
    cy.selectLastRadio();

    // cy.visit('http://127.0.0.1:8080/post', {
    //   qs: {
    //     postId: 1
    //   }
    // })
    // cy.get('input').then((elements) => {
    //   // cy.log(value)
    //   debugger;
    //   var count = elements.find((el) => {
    //     return el.type == "radio"
    //   })
    //   cy.wait(2000)
    //   expect(count?.length).to.equal(2)
    //   // return 'abc';
    // })
    //   .should('have.length', '6')
    // cy.visit('http://127.0.0.1:8080/post.html?postId=2');
    // cy.get('input[type=text]').spread((email, username) => {
    //   cy.log(email.value, username.value)
    // });
    // cy.get('input[type=text]').each((el, i) => {
    //   if (i == 0) {
    //     cy.wrap(el).should('be.focused')
    //   }
    //   cy.wrap(el).should('be.empty')
    // });
    // cy.get('input[type=text]').should('have.length', 2).first()
    // .then((r) => console.log(r))
    // cy.fixture('comments.json').as('comments').then((comments) => {
    //   console.log(comments)
    //   cy.intercept('https://jsonplaceholder.typicode.com/posts/2/comments', [comments[0], comments[1]])
    // })
    // cy.visit('http://127.0.0.1:8080/company.html');
    // cy.window().then((w) => console.log(w.companyData))
  })
})