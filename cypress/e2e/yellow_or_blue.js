describe('Juego Amarillo o Azul', () => {

  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/yellowOrBlue');
  });

  it('elige el botón correcto según el color mostrado en el texto', () => {
    // Genera un nuevo color presionando el botón correspondiente
    cy.get('.form_btn.add').contains('Generate Color').click();

    // Detecta el color indicado y presiona el botón que coincida
    cy.get('h5.color').then(($text) => {
      const detectedColor = $text.text().trim().toLowerCase();

      if (detectedColor === 'yellow') {
        cy.get('.form_btn.yellow').click();
      } else if (detectedColor === 'blue') {
        cy.get('.form_btn.blue').click();
      }
    });
  });

});
