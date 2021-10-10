describe('The Home Page', () => {
  beforeEach(() => {
    cy.exec('npm run start');
  });

  it('successfully loads', () => {
    cy.visit('/');
  });

  it('search shopping stores close from cordinates', () => {
    cy.get('[role="homeSearchInput"]').type(
      '-23.570770500000002, -46.64318587793211',
    );

    cy.get('[role="showShoppingStoresList"]', { timeout: 3000 }).should(
      'be.visible',
    );
  });
});
