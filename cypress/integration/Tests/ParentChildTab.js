import *as globalNavigations from '../../support/globalNavigations';

describe('Parent Child Tab', () =>{
      
      

    it('Navigate to the practice page', () =>{

        globalNavigations.practicePage()

    });

    it('Select the new tab button', () =>{

        cy.get('#opentab')
          .invoke('removeAttr','target' )
          .click()

    });

    it('Verify navigated to the new page', () =>{

        cy.url()
          .should('include', 'rahulshettyacademy.com/#/index')

    });

    it('Navigate to the main url', () =>{

        cy.go('back')
        cy.go('forward')

    });
});