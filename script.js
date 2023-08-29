//your JS code here. If required.
it('should open lightbox for images', () => {
  cy.visit('/path-to-your-page'); // Replace with the actual path

  // Click on the first image to open the lightbox
  cy.get('[data-lightbox="gallery"]:first').click();

  // You can add assertions here to check for lightbox elements
  // For example:
  cy.get('div#lightbox.lightbox').should('have.length.at.least', 1);
});
