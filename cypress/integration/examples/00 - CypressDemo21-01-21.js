/// <reference types="cypress" />

context('Demo Cypress - Politie.nl', () => {
  beforeEach(() => {
    cy.visit('www.politie.nl')
  })

  // https://on.cypress.io/interacting-with-elements

  it('tc 1 - Controle telefoon nummer = 112', () => {
    cy.get('span[class="title"]').contains('112');
    cy.get('span[class="subtitle"]').contains('0900-8844');
  })

  it('tc2 - Controle of zoekveld zichtbaar is', () => {
    cy.get('input[id="search-bar-input"]').should('be.visible');
   })

  it('tc 3 -Zoeken naar adresgegevens van Politie Zwolle', () => {
    // cy.pause();
      cy.log('Dan zoek ik naar Zwolle in het zoekveld');
    cy.get('input[id="search-bar-input"]', {timeout:10000}).type('Zwolle');
    cy.get('button[title="zoeken"]').eq(0).click();

      cy.log('dan klik ik op zwolle')
    cy.get('a[href="./mijn-buurt?geoquery=Zwolle&distance=5.0"]').click();

      cy.log('dan controleer ik of de adres gegevens van de politiebureaus zichtbaar zijn in de pagina');
    cy.get('body').contains('Koggelaan 8');
    cy.get('body').contains('Verlengde Parklaan 36b');

  })

})
