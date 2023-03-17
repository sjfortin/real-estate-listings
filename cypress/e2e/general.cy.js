describe('template spec', () => {
  it('passes', () => {
    cy.visit('http://localhost:8082/');
    cy.get('.btn').should('contain', 'Add Sale or Rental Listing');
  })
})