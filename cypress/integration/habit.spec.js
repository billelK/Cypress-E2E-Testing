/// <reference types="Cypress" />

describe('Habit', () => {
    
    beforeEach(() => {
        cy.visit("/habits") 
    })

    it('Should apear a pop up windows when button add is clicked', () => {
        cy.get('#habit-add-btn').click()

        cy.get('.modal-content').should('be.visible')
    })

    it('should be able to input a "habit" and than save it, the Habit should apear in the page after that ', () => {
        cy.contains('button','Add').click()
        cy.get('input').type('Play world of warcraft legion')
        cy.contains('button', 'Save Changes').click()
        cy.get('.modal-backdrope').should('not.exist')
        cy.contains('Play world of warcraft legion').should('be.visible')

    })

    it('should toggle habit card icon change when clicked', () => {
        cy.contains('button','Add').click()
        cy.get('input').type('My new habit')
        cy.contains('button', 'Save Changes').click()
        cy.get('[src="/static/media/close.fa7e5ead.svg"]').should('be.visible')
        cy.get('.HabitCard').contains('My new habit').click()
        cy.get('[src="/static/media/check.9e8832df.svg"]').should('be.visible')

    })
})