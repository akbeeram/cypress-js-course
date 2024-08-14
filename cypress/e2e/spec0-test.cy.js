
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

  it('.spy', () => {
    const obj = {
      name: 'cypress',
      getName: function () {
        return this.name;
      }
    }
    cy.spy(obj, 'getName');
    obj.getName();
    expect(obj.getName).to.be.called;

    cy.visit('http://127.0.0.1:8080').wait(2000);
    cy.window().then((w) => {
      cy.spy(w, 'handleBtnClick').as('mySpy');
      cy.spy(w, 'handleKeyUp').as('keyUpSpy');
    });
    cy.get('#email').type('anil@email.com').wait(500);
    cy.get('#username').type('anil@email.com').wait(500);
    cy.get('#password').type('anil.com').wait(500);
    cy.get('input[type=radio]').first().check().wait(500);
    cy.get('#loginBtn').click().wait(500);
    cy.get('@mySpy').should('be.called')
    // cy.get('@keyUpSpy').should('have.callCount', 40)
  });
  it.only('.stub', () => {
    // cy.visit('http://127.0.0.1:8080').wait(2000);
    // cy.window().then((w) => {
    //     cy.stub(w, 'handleBtnClick').returns(null).as('asdf');
    // });
    // cy.get('#email').type('anil@email.com').wait(500);
    // cy.get('#username').type('anil@email.com').wait(500);
    // cy.get('#password').type('anil.com').wait(500);
    // cy.get('input[type=radio]').first().check().wait(500);
    // cy.get('#loginBtn').click();
    // cy.get('@asdf').should('be.called')

    // stub object methods
    var obj = {
      name: 'cypress',
      getName: function (msg = "") {
        return this.name + msg;
      }
    }
    // cy.stub(obj, 'getName').returns('Anil')
    cy.stub(obj, 'getName', () => {
      return 'Sample Msg'
    })
    var msg = obj.getName();
    expect(obj.getName).to.be.called
    expect(msg).to.equal('Sample Msg')
  });
  it('Cypress global obj', () => {
    // console.log(Cypress)
    cy.get('#companyList tbody tr').each((trEl, i) => {
      console.log(i)
      if (i == 3) {
        // cy.wrap(trEl).get('td').eq(1).should('have.text', 'KLMNOPQRS')
        cy.wrap(trEl).within((tdList) => {
          cy.get('td').eq(1).should('have.text', 'KLMNOPQRS')
        })
      }
    })
  });
})