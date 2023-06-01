describe('Artist actions ', () => {
  before(() => {
    cy.visit('');
  })

  it("Uploading work should be allowed", () => {

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Stats should be available on artist's product page", () => {
    // sold
    // revieniu
    // etc

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it('Page customization should be possible', () => {
    //add logo
    //banner
    // create collection

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  });
})

describe('Artist work approval flow ', () => {

  it("Approving artist's work by admin should make work available in shop", () => {
    //as artist upload work
    // go to admin as Validator
    // Select artwork
    // approve artwork

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Artist should be informed about work rejections", () => {
    //check product page for rejection message

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

})

describe('Cart for artist ', () => {

  it("Artist's work should be available with 50% Discount", () => {

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })
})