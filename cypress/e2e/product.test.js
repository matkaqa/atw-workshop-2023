describe('PDP Test', () => {
    before(() => {
        cy.visit('');
    })

    it("YMAL", () => {
        //go to random product page
        // scroll to You might also like feed
        // other products should be displayed
    })

    it("Categories and Tags", () => {
// go to random product page
        // scroll to Categories and Tags
        // check if categories and tags are displayed
        // click on  item
        // user is redirected to search result for given category or tag
    })

    it("FAQ", () => {
        // go to random product page
        // scroll to FAQ
        // click on FAQ
        // check if FAQ is displayed
    })

    it("product details", () => {
        // go to random product page
        // scroll to Product details
        // check if product title is displate
        // check if collection name is displate
        // check if marketing info is displayed (return policy, tree, support , gift, magnet)
    })

    it("Product added to wishlist", () => {
        // go to random product page
        // click on heart
        // check if product is added to wishlist
    })
    it("Product check addons", () => {
        // go to random product page
        // change size
        // pirce is adjuster
        // change to gloss
        // price is adjusted
        // change frame
        // price is adjusted
        // add to cart
        // go to cart
        // all addons are properly applayed
    })


    it("Buy Accessories from search", () => {
        //search for magnet
        // a special prompt with magnet accessories should be displayed
        // click add to cart
        // go to cart
        // check if magnets addet properly
    })

    it.skip("Buy 3d magnet", () => {
        // hover over accessories in header
        // click on 3d magnet
        // check if 3d magnet page is displayed
        // add to cart
        // go to cart
        // check if 3d magnet is added properly
    })

    it("Acessories -> Gift card", () => {
        // hover over accessories in header
        // click on gift card
        // click on add note
        // add some random text
        // change country to usa
        // add to cart
    })
})