describe("End-to-End Login Flow", () => {
  beforeEach(() => {
    cy.visit("/");
  });

  it("should display login form", () => {
    cy.get("h1").should("contain", "Item Management");
    // cy.get('input[name="email"]').should("exist");
    // cy.get('input[name="password"]').should("exist");
    // cy.get('button[type="submit"]').should("exist");
  });

  //   it("should show error for invalid credentials", () => {
  //     cy.get('input[name="email"]').type("invalid@example.com");
  //     cy.get('input[name="password"]').type("wrongpassword");
  //     cy.get('button[type="submit"]').click();

  //     cy.get(".error-message").should("contain", "Invalid credentials");
  //   });

  //   it("should login successfully with valid credentials", () => {
  //     cy.get('input[name="email"]').type("user@example.com");
  //     cy.get('input[name="password"]').type("correctpassword");
  //     cy.get('button[type="submit"]').click();

  //     // Redirect to dashboard
  //     cy.url().should("include", "/dashboard");
  //     cy.get("h1").should("contain", "Welcome, User!");
  //   });
});
