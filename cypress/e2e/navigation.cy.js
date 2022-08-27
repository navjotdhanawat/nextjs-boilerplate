describe("Navigation", () => {
  describe("Static pages", () => {
    it("should navigate to the about page", () => {
      // Start from the index page
      cy.visit("http://localhost:3000/");
    });
  });
});
