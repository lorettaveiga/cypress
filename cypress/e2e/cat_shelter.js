describe('Pruebas de Refugio de Gatos', () => {
  
  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/catShelter');
  });

  it('agrega un nuevo gato al refugio', () => {
    // Abre el formulario para añadir un gato
    cy.get('.link_btn.add').click();

    // Rellena los campos del formulario
    cy.get('input[name="name"]').type('Whiskers');
    cy.get('textarea[name="description"]').type('Un gato amigable que adora jugar');

    // Selecciona la opción para gatos que desean salir
    cy.get('input[name="inOrOutside"][value="outside"]').check();

    // Envía el formulario
    cy.get('.form_btn.add').click();
  });

  it('modifica el nombre del gato existente', () => {
    // Accede a la edición del primer gato en la lista
    cy.get('.fas.fa-paw').first().click();

    // Cambia el nombre actual por uno nuevo
    cy.get('input[name="name"].name')
      .clear()
      .type('Mittens');

    // Guarda los cambios realizados
    cy.get('.form_btn.add').contains('Save').click();
  });

  it('elimina un gato del refugio', () => {
    // Entra a la edición del primer gato disponible
    cy.get('.fas.fa-paw').first().click();

    // Ejecuta la acción de eliminar
    cy.get('.form_btn.delete').click();
  });

});
