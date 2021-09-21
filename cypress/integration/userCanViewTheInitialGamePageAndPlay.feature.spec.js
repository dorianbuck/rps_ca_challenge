describe("User can see the game page and press the buttons to play", () => {
  before(() => {
    cy.visit("/");
  });
  it("is expected to display a header", () => {
    cy.get("[data-cy=header]").should("be.visible");
  });
  it("is expected to see a row of three buttons", () => {
    cy.get("[data-cy=btn-group]").should("be.visible");
  });
  it("is expected to exist a btn-rock that user can press for the rock choice", () => {
    cy.get("[data-cy=btn-rock]").click();
    cy.get("[data-cy=user-choice-info]").should("contain", "Rock");
  });
  it("is expected to exist a btn-paper that user can press for the paper choice", () => {
    cy.get("[data-cy=btn-paper]").click();
    cy.get("[data-cy=user-choice-info]").should("contain", "Paper");
  });
  it("is expected to exist a btn-scissor that user can press for the scissor choice", () => {
    cy.get("[data-cy=btn-scissor]").click();
    cy.get("[data-cy=user-choice-info]").should("contain", "Scissor");
  });
  it("is expected to display the computer choice and outcome when users choice is rock", () => {
    beforeEach(() => {
      cy.get("[data-cy=btn-rock]").click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Scissor");
      cy.get("[data-cy=game-results]").should("contain", "You won!");
    });
  });
  it("is expected to display the computer choice and outcome when users choice is paper", () => {
    beforeEach(() => {
      cy.get("[data-cy=btn-paper]").click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Paper");
      cy.get("[data-cy=game-results]").should("contain", "It's a draw!");
    });
  });
  it("is expected to display the computer choice and outcome when users choice is scissor", () => {
    beforeEach(() => {
      cy.get("[data-cy=btn-scissor]").click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Rock");
      cy.get("[data-cy=game-results]").should("contain", "You lost!");
    });
  });
});
