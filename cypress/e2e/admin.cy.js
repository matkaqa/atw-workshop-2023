describe('Admin', () => {
  before(() => {
    cy.visit('');
  })

  it("DMCA", () => {
//go to admin
    // select artis artwork
    // remove artwork and mark it as DMCA violation

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("User", () => {
//go to admin
    // reset user password
    // check if user is able to login with new password

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Artist", () => {
//go to admin
    // Select user account
    // upgrade it to artist

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Artist approve work", () => {
//as artist upload work
    // go to admin as Validator
    // Select artwork
    // approve artwork

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Brand", () => {
   //go to admin
    //create brand
    //add brand logo and layout
    // add collection
    // add adrtworsk
    // publish brand
    // check on fron if it is working

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })
})