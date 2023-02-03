
describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit("http://localhost:3000")
    cy.get("h1").contains("Testing Next.js Applications with Cypress")
  })
})



/*
 - describe function takes 2 arguments, 1) a string which is a description of the test, 2nd callback function
 - It ==< same as the describe function
- visit is a command that tells Cypress where to execute our tests cy.visit('https://example.cypress.io')



 */