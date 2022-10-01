function add(n: number, m: number) {
  return n + m;
}
describe("Sidebar Navigation", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000");
  });

  context("desktop resolution", () => {
    beforeEach(() => {
      cy.viewport(1025, 900);
    });

    it("links are working", () => {
      // cy.visit("http://localhost:3000/");
      // cy.get("h1").contains("Welcome to Next.js!");
      // check that each link leads to the correct page
      cy.get("nav").contains("Issues").click();
      // cy.url().should("eq", "http://localhost:3000/dashboard/issues");
      cy.url().should("include", "issues");
    });

    it("is collapsible", () => {
      // collapse navigation
      cy.get("nav").contains("Collapse").click();

      // check that links still exist and are functionable
      cy.get("nav").find("a").should("have.length", 5).eq(2).click();
      cy.url().should("eq", "http://localhost:3000/dashboard/alerts");

      // check that text is not rendered
      cy.get("nav").contains("Alerts", { timeout: 0 }).should("not.exist");

      //without collapsing
      // cy.get("nav").contains("Alerts", { timeout: 0 }).should("exist");
      // https://github.com/cypress-io/cypress/issues/7680#issuecomment-643059326
    });

    it("Example test", () => {
      expect(add(1, 2)).to.eq(3);
    });
  });

  context("mobile resolution", () => {
    beforeEach(() => {
      cy.viewport("iphone-8");
    });
    /* Cypress actually verifies that element is hidden via css property like display: none or visibility: hidden. But in our case, the element we are trying to assert is not even present in our app. That is why our assertion fails. Instead of visibility check, we should be doing an assertion of non-existence, so .should('not.exist') */
    it("sidebar navigation not appearing in the beginning", () => {
      cy.wait(500); // wait for animation to finish
      cy.get("header").then(() => {
        cy.get("nav").isNotWithinViewport();
      });
    });

    it("toggles sidebar navigation by clicking the menu icon", () => {
      // open mobile navigation
      cy.get("header").find("img[alt='open menu']").click();

      cy.wait(500); // wait for animation to finish
      cy.get("nav").isWithinViewport();
    });
  });
});

export {};
