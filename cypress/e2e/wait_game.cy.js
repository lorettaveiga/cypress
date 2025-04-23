describe('Juego de Espera', () => {

  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/waitGame');
  });

  it('espera 5 segundos antes de presionar el botón de finalizar', () => {
    // Comienza el juego haciendo clic en el botón de inicio
    cy.get('[data-testid="startBtn"]').click();

    // Espera exactamente 5 segundos antes de continuar
    cy.wait(5000);

    // Localiza y presiona el botón de finalizar
    cy.get('.form_btn.delete', { timeout: 12000 })
      .should('be.visible')
      .click();
  });

});
