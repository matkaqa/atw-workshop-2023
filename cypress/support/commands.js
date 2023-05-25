// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })

const { assert } = require("chai");

/* this method is used to randomly fail test for usage in reporting
*  probalility = 0 - test want fail
*  probalility = 100
*  probalilty 1-99 percentage chance of failing
* using value outside of range will defult to 1 percen
*/

/* this method is used to randomly fail test for usage in reporting
*  probalility = 0 - test will always fail
*  probalility = 100 - test will succed always
*  probalilty 1-99 percentage chance of failing
*/
Cypress.Commands.add('randomlyFailTest', (successPercent) => {
   if (successPercent < 0 || successPercent > 100) {
        throw new Error("successPercent needs to be between 0 and 100");
    }
    var randomreuslt = Math.random() * 100;
    cy.log(` log random result ${randomreuslt}`)

    if (randomreuslt < successPercent) {
     cy.log(` log random result ${randomreuslt}`)
        cy.url().should("be.true", false)
       // assert.fail("random fail for purpose of reports")
    }
})