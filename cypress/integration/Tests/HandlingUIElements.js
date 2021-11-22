
describe('UI elements', () =>{

    it('Verify input and radio buttons', () =>{

        cy.visit('http://demo.guru99.com/test/newtours/')
        
        cy.url().should('include', 'newtours')

        cy.get(':nth-child(2) > [width="112"] > input').should('be.visible').type('mercury')
        cy.get(':nth-child(3) > [width="112"]').should('be.visible').type('mercury')

        cy.get('div > input').should('be.visible').click()

        cy.title().should('eq','Login: Mercury Tours')

        cy.wait(2000)

        cy.get(':nth-child(2) > [width="80"] > a').click()

        //radio button
        cy.get('[value="roundtrip"]').should('be.visible').should('be.checked')
        cy.get('[value="oneway"]').should('be.visible').should('not.be.checked').click()
        
        cy.get('td > input').should('be.visible').click()
        cy.wait(2000)


    });



});