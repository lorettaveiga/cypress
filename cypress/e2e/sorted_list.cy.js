describe('Lista Ordenada', () => {

  beforeEach(() => {
    cy.visit('https://thelab.boozang.com/sortedList');
  });

  it('agrega elementos a la lista y luego los elimina', () => {
    // Inserta el primer elemento en la lista
    cy.get('input[type="text"]').type('Primer Elemento');
    cy.get('.form_btn.add').click();

    // Inserta el segundo elemento
    cy.get('input[type="text"]').type('Segundo Elemento');
    cy.get('.form_btn.add').click();

    // Elimina los elementos con el ícono de basurero
    cy.get('.fas.fa-trash-alt.delete_icon').first().click();
    cy.get('.fas.fa-trash-alt.delete_icon').first().click();
  });

});
