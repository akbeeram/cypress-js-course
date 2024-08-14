describe('Company details Test Suite', () => {

  beforeEach(() => {
    cy.visit('http://127.0.0.1:8080/').wait(1000);
    cy.loginToMyApp('email@google.com', 'username', 'test2');
    cy.wait(1000);
    // cy.openTestApp('Company Details');
    cy.openTestApp('Internet Banking');
    // cy.get('.site-link').contains('Company Details');
    // cy.get('.site-link').eq(1);
    cy.wait(1000);
  });

  it('should display BUY', () => {
    cy.get('.card-wrapper').eq(0).children().last().children().last().children().last().as('buySellSignalText');
    cy.get('@buySellSignalText').should('have.text', 'BUY');
    cy.get('@buySellSignalText').should('have.css', 'color', 'rgb(60, 179, 113)');
  });

  it('should display our company name in 4th placee in top 10 list', () => {
    // cy.get('#companyList tbody tr td').contains("KLMNOPQRS").should('have.length', 1);
    cy.get('#companyList table tbody tr').each((trEl, i, trList) => {
      console.log(i)
      console.log(trEl)
      if (i == 3) {
        cy.wrap(trEl).within(() => {
          cy.get('td').as('tdList')
          cy.get('@tdList').should('have.length', 11)
          cy.get('@tdList').eq(1).should('have.text', "KLMNOPQRS")
        })
      }
      return trList[0];
    });
    // 
    // cy.get('')
    // .each().should()
  });

  it('Is Material cost row hidden initially and opens when parent is expanded ?', () => {
    cy.get('.companyProfitListTable tbody tr td').as('tdList');
    cy.get('@tdList').contains('Material Cost %').should('not.be.visible');
    cy.wait(1000);
    cy.get('@tdList').contains('Expenses +').should('be.visible').wait(1000).click().wait(1000);
    cy.get('@tdList').contains('Material Cost %').should('be.visible');
  });

  it.only('Internet Banking > user has 2 FDs totalling 2,00,000', () => {
    cy.get('#acc-accordion-ul').children().eq(1).as('fdBlock');
    cy.get('@fdBlock').click().wait(1000);
    cy.get('@fdBlock').within(() => {
      cy.contains('Balance').siblings().eq(0).should('have.text', '$2,00,000.00');
      // .then((r) => {
      //   console.log(r);
      // })
    })
  });
});