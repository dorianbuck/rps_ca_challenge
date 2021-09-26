describe("The game logic is being tested", () => {
  describe("Computers pre loaded choices will make the following to happen", () => {
    beforeEach(() => {
      cy.visit("/"),
        {
          onBeforeLoad(Math) {
            cy.stub(Math, "random").returns('Scissor');
          },
        };
      cy.get("[data-cy=btn-group]").as("btnGroup");
    });
    it("is expected to display the computer choice and outcome when users choice is rock", () => {
      
      onBeforeLoad(Math)
        cy.stub(Math, "random").returns('Scissor');
      
      cy.get("@btnGroup").first().click();
      cy.get("[data-cy=computer-choice-info]").should("contain", "Scissor");
      cy.get("[data-cy=game-results]").should("contain", "YOU WIN!");
    });
    it("is expected to display the computer choice and outcome when users choice is paper", () => {
      cy.get("@btnGroup")
      .first()
      .next()
      .click();
    cy.get("button.ui.button").should("contain", "Paper")
      cy.get("[data-cy=game-results]").should("contain", "YOU LOST!");
    });
    it("is expected to display the computer choice and outcome when users choice is scissor", () => {
      cy.get("@btnGroup")
      .last()
      .click();
    cy.get("button.ui.button").should("contain", "Scissor");
      cy.get("[data-cy=game-results]").should("contain", "ITS A DRAW!");
    });
  });
});
