describe('User can see the game page and press the buttons to play', () => {
  
  it('is expected to display a header', () => {
    cy.visit("/")
    cy.get("[data-cy=header]").should("be.visible")
  });
}); 