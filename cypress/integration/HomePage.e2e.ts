describe('Home Page Integration (mobile)', () => {
  beforeEach(() => {
    cy.viewport('iphone-5');
  });

  it('successfully loads the page', () => {
    cy.visit('/');
  });

  it('search shopping stores nearest from cordinate passed', () => {
    cy.get('[role="homeSearchInput"]').type(
      '-23.570770500000002, -46.64318587793211',
    );

    cy.get('[role="showShoppingStoresList"]', { timeout: 3000 }).should(
      'be.visible',
    );
  });

  it('show shopping store location on maps when selected', () => {
    cy.get('[role="showShoppingStoreOnMap"]').first().click();

    cy.get('[role="mapsLocationModal"]', { timeout: 5000 }).should(
      'be.visible',
    );
  });
});
