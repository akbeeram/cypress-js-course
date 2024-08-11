describe('query commands', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/dashboard.html');
  });

  it('.get', () => {
    cy.get('h2 a').then((elem) => {
      // console.log(elem)
    });
    cy.get('ul').then((elem) => {
      // console.log(elem)
    });
  })

  it('.children', () => {
    cy.get('ul').children().then((elem) => {
      // console.log(elem)
    });
  })

  it('.contains', () => {
    cy.get('h2').contains('Coding Tools').then((elem) => {
      // console.log(elem)
    });
  })
  it('.document', () => {
    cy.document().then((doc) => {
      // console.log(doc)    // renders the actual page that is being tested
    });
  })
  it('.eq', () => {
    cy.get('h2 a').eq(1).then((elem) => {
      // console.log(elem[0].innerText)    // fetches by index
      // expect(elem[0].innerText).to.include('Next');
    });
  })
  it('.filter', () => {
    cy.get('input').filter('.input').then((doc) => {
      // console.log(doc)
    });
  });
  it('.find', () => {
    cy.get('.login-block').find('.input').then((doc) => {
      // console.log(doc)
    });
  });
  it('.first', () => {
    cy.get('input').first('.input').then((doc) => {
      // console.log(doc)
    });
  });
  it('.last', () => {
    cy.get('.postItem').last().then((doc) => {
      // console.log(doc)
    });
  });
  it('.title', () => {
    cy.title().then((doc) => {
      console.log(doc)
    });
  });
  it('.root', () => {
    cy.root().then((res) => {
      console.log(res)
    });
  });
  it('.window', () => {
    cy.window().then((res) => {
      console.log(res)
    });
  });
  it.only('.its', () => {     // to get the property of the result
    cy.get('.selectedPost').its('length').then((res) => {
      console.log(res)
    });
  });
  it('.next', () => {     // to get the next item
    cy.get('.selectedPost').next().then((res) => {
      console.log(res)
    });
  });
  it('.nextAll', () => {
    cy.get('.selectedPost').nextAll().then((res) => {
      console.log(res)
    });
  });
  it('.prev', () => {     // to get the next item
    cy.get('.selectedPost').prev().then((res) => {
      console.log(res)
    });
  });
  it('.prevAll', () => {
    cy.get('.selectedPost').prevAll().then((res) => {
      console.log(res)
    });
  });
  it('.parent', () => {
    cy.get('.selectedPost').parent().then((res) => {
      console.log(res[0].classList)
    });
  });
  it('.parents', () => {
    cy.get('.selectedPost').parents().then((res) => {
      console.log(res)
    });
  });
  it('.url', () => {
    cy.url().then((res) => {
      console.log(res)
    });
  });
  it.only('.not', () => {
    cy.get('.postItem').not('.selectedPost').then((res) => {
      console.log(res);
    });
  });
})