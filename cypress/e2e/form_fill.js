describe('Prueba de Completar Formulario', () => {

  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/formFill');
  });

  it('completa el formulario y lo envía', () => {
    // Introduce datos en los campos del formulario
    cy.get('input[name="firstname"]').type('John');
    cy.get('input[name="lastname"]').type('Doe');
    cy.get('input[name="email"]').type('john.doe@example.com');
    cy.get('input[name="password"]').type('password123');

    // Presiona el botón para guardar en la base de datos
    cy.get('.form_btn.add').contains('Save to db').click();

    // Muestra los usuarios almacenados
    cy.get('.form_btn.orange').contains('Show users in db').click();
  });

});
