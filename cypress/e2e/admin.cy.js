describe('Admin panel actions ', () => {
  before(() => {
    cy.visit('');
  })

  it("Marking artwork with DMCA should remove artwork from shop", () => {
    //go to admin
    // select artis artwork
    // remove artwork and mark it as DMCA violation

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Reseting user password should allow user to login with new password", () => {
    //go to admin
    // reset user password
    // check if user is able to login with new password

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Upgrading user account to artist should be allowed", () => {
    //go to admin
    // Select user account
    // upgrade it to artist

    cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
  })

  it("Adding and publishing brand should make it available for users", () => {
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