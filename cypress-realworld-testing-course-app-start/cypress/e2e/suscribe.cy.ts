describe("Testing the Newsleeter Suscription", () => {
    beforeEach(() => {
        cy.visit("http://localhost:3000/")
    })

    it("Valid Email and suscribes to the Email List", () => {
        cy.getByData("email-input").type("sippy@gmail.com");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("exist").contains("Success: sippy@gmail.com has been successfully subscribed")
    })

    it("Invalid Email and suscribes to the Email List", () => {
        cy.getByData("email-input").type("sippy");
        cy.getByData("submit-button").click();
        cy.getByData("success-message").should("not.exist")
    })

    it("User is Already suscribed", () => {
        cy.getByData("email-input").type("john@example.com");
        cy.getByData("submit-button").click()
        cy.getByData("server-error-message").should("exist").contains("Error: john@example.com already exists. Please use a different email address.")

    })
})

