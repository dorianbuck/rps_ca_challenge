describe("The game logic is being tested", () => {
  describe("Computers pre loaded choices will make the following to happen", () => {
    beforeEach(() => {
      cy.visit("/", {
        onBeforeLoad(win) {
          cy.stub(win.Math, "random").returns("0");
        },
      });
    });
    it("is expected to display the computer choice and outcome when users choice is rock", () => {
      cy.get("[data-cy=btn-0]").click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Rock");
      cy.get("[data-cy=game-results]").should("contain", "ITS A DRAW!");
    });
    it("is expected to display the computer choice and outcome when users choice is paper", () => {
      cy.get("[data-cy=btn-1]").click();
      cy.get("button.ui.button").should("contain", "Rock");
      cy.get("[data-cy=game-results]").should("contain", "YOU WIN!");
    });
    it("is expected to display the computer choice and outcome when users choice is scissor", () => {
      cy.get("[data-cy=btn-2]").click();
      cy.get("button.ui.button").should("contain", "Rock");
      cy.get("[data-cy=game-results]").should("contain", "YOU LOST!");
    });
  });
});
