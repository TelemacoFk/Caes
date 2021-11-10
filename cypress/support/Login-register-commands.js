Cypress.Commands.add('llenarRegistro', (correoRegistroExitoso1) => {
    cy.get('.login').click();
        cy.get('#email_create').type(correoRegistroExitoso1)
        cy.get('#SubmitCreate > span').click();
        cy.wait(2000)
    })

Cypress.Commands.add('llenarFormularioNuevoUsuario', (nombre, apellido, clave, direccion, ciudad, telefono, estado, zip) => {
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(nombre)
        cy.get('#customer_lastname').type(apellido)
        cy.get('#passwd').type(clave)
        cy.get('#address1').type(direccion)
        cy.get('#city').type(ciudad)
        cy.get('#phone_mobile').type(telefono)
        cy.get('#id_state').select(estado)
        cy.get('#postcode').type(zip)
        cy.get('#submitAccount > span').click();
    })

