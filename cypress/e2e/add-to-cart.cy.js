describe('Add To Cart Flow', () => {
    beforeEach(() => {
        cy.visit('');
    })

    it("", () => {

    })

    it("Adding to cart from wishlist shoudnt remove item from wishlist", () => {
      //add something to wishlist
        //go to wishlist
        //click on
        //check if item is still in wishlist
        // and has addet to cart text
 cy.log(Cypress.env("defualtFailureRate"))
        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Given I've added plate When I change its addons Then I can buy it with addons", () => {
        //add plate to cart
        //in cart
        // add gloss
        // add frame
        // change size
        // change count
        //check if price is correct

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Changing Country from pl to use", () => {
        //add plate to cart
        //in cart
        // change country to poland
        // price is in euro
        // change country to usa
        // price is in usd

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Discount", () => {
        //add plate to cart
        //in cart click on discount
        // insert  discount code
        // price is lower

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Remove from cart", () => {
        //add plate to cart
        // add difrent plate to cart
        // go to cart
        // remove 1st plate
        // plate remove
        // remove 2nd plate
        //redirect to homepage

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    // trees counter is not checkedm
    //not covered cant sell some products in some countires -example starwars in venezula
})