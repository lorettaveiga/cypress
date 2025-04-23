describe('Juego de Velocidad', () => {

  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/speedGame');
  });

  it('mide el tiempo de reacción haciendo clic en el botón de finalizar lo más rápido posible', () => {
    // Inicia el juego presionando el botón de empezar
    cy.get('[data-testid="startBtn"]').click();

    // Espera a que aparezca el botón de finalizar y haz clic en cuanto esté visible
    cy.get('.form_btn.delete', { timeout: 12000 })
      .should('be.visible')
      .click();
  });

});
