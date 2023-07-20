/// <reference types="cypress"/>

describe('Locators', () => {
    beforeEach(() => {
        cy.visit("/elements")
    })

    it('Locate elements using Get()', () => {
        // getting elemnts by tag name
        cy.get('button')

        // getting elemnts by class name
        cy.get('.btn-with-class')

        // getting all elemnts by specific class name
        cy.get('[class="Elements-btn btn-with-class more-btn-classes"]')

        // getting elemnts by id
        cy.get('#btn-with-id')

        // getting elemnts by a specific attribute
        cy.get('[type="submit"]')
        cy.get('[data-cy="btn-id-1"]')

        // getting elemnts by tag name and class 
        cy.get('button.Elements-btn')
        
        // getting elemnts by tag name and class and ID 
        cy.get('button.Elements-btn#btn-with-id')

        // getting elemnts by tag name and class and data type attribute 
        cy.get('button.Elements-btn[data-cy="btn-id-1"]')

        //get elemnt by test data using a new defined funtion in the commands.js
        cy.getByTestId('btn-id-1')
    })

    it('Locate elements using contains()', () => {
        //get element by text contained
        cy.contains('Unique Text')

        //get element by a none unique text 
        cy.contains('Not Unique Text')

        //get element with contain and selector
        cy.contains('[type="submit"]', 'Not Unique Text')
        cy.contains('form', 'Not Unique Text')

        //get elements using both get and contain
        cy.get('[type="submit"]').contains('Not Unique Text')
    })

    it('get elements with find', () => {
        cy.get('#form-1').find('[class="Elements-btn btn-1"]')
        cy.get('#form-1').find('[class="Elements-btn btn-2"]')
    })
})