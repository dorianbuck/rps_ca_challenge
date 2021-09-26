describe("User can see the game page and press the buttons to play", () => {
  beforeEach(() => {
    cy.visit("/");
  });
  it("is expected to display a header", () => {
    cy.get("[data-cy=header]").should("be.visible");
  });
  it('is expected to display a footer', () => {
    cy.get('[data-cy=footer]').should('contain', 'Made with React 17.0.2')
  });
  it("is expected to be a user hand illustration or image", () => {
    cy.get("[data-cy=user-image]").should("be.visible");
  });
  it("is expected to be a computer hand illustration or image", () => {
    cy.get("[data-cy=computer-image]").should("be.visible");
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
  it("is expected to be visible a reset button once a game has been played", () => {
    cy.reload();
    cy.get("[data-cy=btn-reset]").should("be.disabled");
    cy.get("[data-cy=btn-rock]").click();
    cy.get("[data-cy=btn-reset]").should("be.visible");
    cy.get("[data-cy=btn-reset]").click();
  });
  it("is expected for gamebuttons to be disabled once a game been played", () => {
    cy.get("[data-cy=btn-rock]").click();
    cy.get("[data-cy=btn-rock]").click().should("not.be.active");
  });
});
