beforeEach(() => {
    cy.visit("https://store.dandelionchocolate.com/");
});
describe("Product page", function () {
    it("Verify the total number of product that are sold out", function () {
        cy.wait(1000);
        cy.xpath('//*[contains(@class, "card__availability")]')
            .its("length")
            .then((length) => {
                console.log(length);
                cy.log("Total number of record Sold Out = ", length);
            });
    });

    it("Get the total number of product", function () {
        cy.wait(1000);
        cy.xpath('//*[contains(@class, "card__name h4")]')
            .its("length")
            .then((length) => {
                cy.log("Total number of Product = ", length);
            });
    });

    it("Get the total number of product that are out of stock", function () {
        cy.xpath('//*[text()[contains(., "Out of Stock")]]')
            .its("length")
            .then((length) => {
                cy.log("Total number of Product that are out of stock are = ", length);
            });
    });
});
