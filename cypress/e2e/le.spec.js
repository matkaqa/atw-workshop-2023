describe('Limited Editon', () => {
    before(() => {
        cy.visit('');
    })

    it("Limited Editon Page", () => {
// select limited displates from menu
        // select limited edion graphic
        // expected: list of limited edditons
        // currently avaible should be on top
        // coming soon next
        // rest should be sold out

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Buy Sold out limited editon", () => {
// go to sold out le page
        // click add to cart
        // button should be disabled

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Buy Coomming  limited editon", () => {
// go to limietd edition list page
        // click on comming soon
        // button should be disabled

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    it("Buy Coomming  limited editon - from pdp", () => {
        // go to comming soon le page by url
        // click on comming soon
        // button should be disabled

        cy.randomlyFailTest(Cypress.env("defualtFailureRate"));
    })

    //not covered test cases  which are not automated
    // buy limited editon as club customer -  club castomer can buy somming soon plated day before offical release
    // check buy limit - there is limit of 3 plates
    // buying avaible limited ediotn
})