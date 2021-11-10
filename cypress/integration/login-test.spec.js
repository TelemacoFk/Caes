/// <reference types="cypress" />

before('', () => {
    cy.fixture('login').then(function(login) {
        this.login = login;
    })
})

describe('hacer registro en e-commerce', () => {
    
    it('exitoso', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoRegistroExitoso1)
        cy.get('#SubmitCreate > span').click();
        cy.wait(2000)
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(this.login.nombre);
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.estado)
        cy.get('#postcode').type(this.login.zip)
        cy.get('#submitAccount > span').click();
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')

    })

    it('fallido por código postal', function () {
        cy.visit('http://automationpractice.com/index.php');
        cy.get('.login').click();
        cy.get('#email_create').type(this.login.correoLoginFallido)
        cy.get('#SubmitCreate > span').click();
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(this.login.nombre);
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.estado)
        cy.get('#postcode').type(this.login.zip)
        cy.get('#submitAccount > span').click()
        cy.get('ol > li').should('contain', 'It must follow this format: 00000')     
    })


    it('Hacer login', function() {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        cy.get('#email').type(this.login.correoRegistroExitoso)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#SubmitLogin > span').click()
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')
    })

    it('Hacer login fallido por credenciales incorrectas', function() {
        cy.visit('http://automationpractice.com/index.php?controller=authentication&back=my-account');
        cy.get('#email').type(this.login.correoLoginFallido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#SubmitLogin > span').click()
        cy.get('ol > li').should('contain', 'Authentication failed')
    })

    it('exitosoLlenarRegistro', function(){
        cy.visit('http://automationpractice.com/index.php');
        cy.llenarRegistro(this.login.correoRegistroExitoso1)
        cy.get('#id_gender1').click();
        cy.get('#customer_firstname').type(this.login.nombre);
        cy.get('#customer_lastname').type(this.login.apellido)
        cy.get('#passwd').type(this.login.clave)
        cy.get('#address1').type(this.login.direccion)
        cy.get('#city').type(this.login.ciudad)
        cy.get('#phone_mobile').type(this.login.telefono)
        cy.get('#id_state').select(this.login.estado)
        cy.get('#postcode').type(this.login.zip)
        cy.get('#submitAccount > span').click();
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')  
    })

    it('ExitosoLlenarRegistroSimplificado', function () {
        cy.visit('http://automationpractice.com/index.php')
        cy.llenarRegistro(this.login.correoRegistroExitoso1);
        cy.llenarFormularioNuevoUsuario(this.login.nombre, this.login.apellido, this.login.clave, this.login.direccion, this.login.ciudad, this.login.telefono, this.login.estado, this.login.zip)
        cy.get('.myaccount-link-list > :nth-child(4) > a > span').should('be.visible')  
    })

    it.only('ExitosoLlenarRegistroSimplificadoErrorZip', function () {
        cy.visit('http://automationpractice.com/index.php')
        cy.llenarRegistro(this.login.correoRegistroExitoso1);
        cy.llenarFormularioNuevoUsuario(this.login.nombre, this.login.apellido, this.login.clave, this.login.direccion, this.login.ciudad, this.login.telefono, this.login.estado, this.login.zipFallido)
        cy.get('ol > li').should('contain', 'It must follow this format: 00000')
    })

})
