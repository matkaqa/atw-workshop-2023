describe('Test for promocode for wishlist', () => {
    before(() => {
        cy.visit('');
    })

    it("ON top of the page is banner with code - code works in checkou", () => {
        // go to home page
        // copy code from banner
        // add plate and go to cart
        // add code


        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Multi plate discount", () => {
        //generate mulit plate discount code (eg 3 plates 30% off)
        // add 1 plates to cart
        //use discount code
        // code works discount not applied
        // add rest of plate
        // discount applied

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Remove discount", () => {
        //Add discount to cart
        // remove discount from cart

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

})