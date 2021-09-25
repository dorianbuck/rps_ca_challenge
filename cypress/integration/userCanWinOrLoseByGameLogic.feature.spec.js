describe("The game logic is being tested", () => {
  describe("Computers pre loaded choices will make the following to happen", () => {
    cy.visit("/", {
      onBeforeLoad(pre_det) {
        cy.stub(pre_det.Math, "computer_choice").returns("scissor");
      },
    });
    it("is expected to display the computer choice and outcome when users choice is rock", () => {
      cy.get("[data-cy=btn-rock]").click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Scissor");
      cy.get("[data-cy=game-results]").should("contain", "You won!");
    });
    it("is expected to display the computer choice and outcome when users choice is paper", () => {
      cy.get("[data-cy=btn-paper]").click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Paper");
      cy.get("[data-cy=game-results]").should("contain", "It's a draw!");
    });
    it("is expected to display the computer choice and outcome when users choice is scissor", () => {
      cy.get("[data-cy=btn-scissor]").click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Rock");
      cy.get("[data-cy=game-results]").should("contain", "You lost!");
    });
  });
});
