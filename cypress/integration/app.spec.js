function add(n, m) {
  return n + m;
}
describe("home page"),
  () => {
    it("test h1", () => {
      cy.visit("http://localhost:3000/");
      cy.get("h1").contains("Welcome to Next.js!");
    });
    it("Example test", () => {
      expect(add(1, 2)).to.eq(3);
    });
  };
