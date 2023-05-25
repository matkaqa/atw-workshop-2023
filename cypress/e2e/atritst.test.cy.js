describe('Given I am an artis', () => {
  before(() => {
    cy.visit('');
  })
  describe('When I upload artwork', () => {
  it("Then I can buy my work at 50% Discount", () => {

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })
    it("Then I can see stats on my product page", () => {
// sold
      // revieniu
      // etc

      cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })
  it("Then it is rejected", () => {
    //check product page for rejection message

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })
})
  describe('When I am on my page', () => {
   it('then I can customize my page', () => {
     //add logo
     //banner
     // create collection

     cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
   });
  })
})