describe('Hello test group!', () => {
  it('Should test hello message!', () => {
    cy.visit('http://localhost:8080');

    cy.get('.app').should('contain', 'Hello World!');
  });
});
