describe("User can see the game page and press the buttons to play", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to display a header", () => {
    cy.get("[data-cy=header]").should("be.visible");
  });
  it("is expected to display a footer", () => {
    cy.get("[data-cy=footer]").should("contain", "Made with React 17.0.2");
  });
  it("is expected to display user a hand illustration or image", () => {
    cy.get("[data-cy=user-image]").should("be.visible");
  });
  it("is expected to display a computer hand illustration or image", () => {
    cy.get("[data-cy=computer-image]").should("be.visible");
  });
  it("is expected to exist a btn-rock that user can press for the rock choice", () => {
    cy.get("[data-cy=btn-0]").should("contain", "Rock");
    cy.get("[data-cy=btn-0]").click()
      cy.get("[data-cy=user-choice-header]").should("contain", "Rock")
  });
  it("is expected to exist a btn-paper that user can press for the paper choice", () => {
    cy.get("[data-cy=btn-1]").should("contain", "Paper");
    cy.get("[data-cy=btn-1]").click()
      cy.get("[data-cy=user-choice-header]").should("contain", "Paper")
  });
  it("is expected to exist a btn-scissor that user can press for the scissor choice", () => {
    cy.get("[data-cy=btn-2]").should("contain", "Scissor");
    cy.get("[data-cy=btn-2]").click()
      cy.get("[data-cy=user-choice-header]").should("contain", "Scissor")
  });
});
