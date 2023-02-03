
describe("home page", () => {
  it("the h1 contains the correct text", () => {
    cy.visit("http://localhost:3000")

    cy.get("[data-test='hero-heading']").contains("Testing Next.js Applications with Cypress")
  })

  it.only("the features of homepage are correact", () => {
    cy.visit("http://localhost:3000")
    cy.get("dt").eq(0).contains("4 Courses");
    cy.get("dt").eq(1).contains("25+ Lessons");
    cy.get("dt").eq(2).contains("Free and Open Source");
  })
})



/*
 - describe function takes 2 arguments, 1) a string which is a description of the test, 2nd callback function
 - It ==< same as the describe function
- visit is a command that tells Cypress where to execute our tests cy.visit('https://example.cypress.io')



 */