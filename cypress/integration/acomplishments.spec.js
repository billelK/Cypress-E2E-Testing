/// <reference types="Cypress"/>

describe('Acomplishments Dashboard', () => {
    beforeEach(() => {
        cy.visit('/accomplishments')
    })
    it('should show "Complete the items above to continue" error if we dont fill My accomplisments input', () => {
        cy.getByTestId('accomplishment-title-input').type('Diamond tournament champion in rocket league')
        cy.get('button.Accomplishment-btn').click()
        cy.contains('Complete the items above to continue').should('be.visible')
    })

    it('should show "Complete the items above to continue" error if we dont fill accomplishment title input' ,() => {
        cy.getByTestId('accomplishment-input').type('Diamond tournament champion in rocket league')
        cy.get('button.Accomplishment-btn').click()
        cy.contains('Complete the items above to continue').should('be.visible')
    })

    it ('should show "Complete the items above to continue !" error if the check box "This accomplishment is valid" is unchecked', () => {
        cy.getByTestId('accomplishment-title-input').type('Diamond tournament champion in rocket league')
        cy.getByTestId('accomplishment-input').type('Diamond tournament champion in rocket league')
        cy.get('button.Accomplishment-btn').click()
        cy.contains('Complete the items above to continue').should('be.visible')
    })

    it('should show "This Accomplisment was Successfully Submitted"', () => {
        cy.getByTestId('accomplishment-title-input').type('Diamond tournament champion in rocket league')
        cy.getByTestId('accomplishment-input').type('Diamond tournament champion in rocket league')
        cy.getByTestId('accomplishment-checkbox').click().should('be.checked')
        cy.get('button.Accomplishment-btn').click()
        cy.contains('This Accomplisment was Successfully Submitted').should('be.visible')

    })

    it('should go back to accomplishment dashboard with empty inputs and unchecked checkbox', () => {
        cy.getByTestId('accomplishment-title-input').type('Diamond tournament champion in rocket league')
        cy.getByTestId('accomplishment-input').type('Diamond tournament champion in rocket league')
        cy.getByTestId('accomplishment-checkbox').click()
        cy.get('button.Accomplishment-btn').click()
        cy.contains('Go Back').click()
        cy.get('[data-cy="accomplishment-title-input"').should('have.value', '')
        cy.get('[data-cy="accomplishment-input"]').should('have.value', '')
        cy.get('[data-cy="accomplishment-checkbox"]').should('not.be.checked')
    })
})