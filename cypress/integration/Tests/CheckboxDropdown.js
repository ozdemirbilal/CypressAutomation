
import *as globalNavigations from '../../support/globalNavigations';

describe('Checkbox, Radio button and dropdown test', () =>{

    it('Checkbox Test', ()=>{

        globalNavigations.practicePage()

        cy.get('#checkBoxOption1')
          .check().should('be.checked')//checked checkbox

        cy.get('#checkBoxOption2')
          .should('not.be.checked')
        
        cy.get('#checkBoxOption3')
          .check().should('be.checked')

        cy.get('#checkBoxOption1')
          .uncheck()//unchecked checkbox
          .should('not.be.checked')
/*
        cy.get('input[type="checkbox"]')//find more than one element in array type
          .check(['option1','option3'])//we should write value of element
          .should('be.checked')
*/

    });

    it('Radio button Test', ()=>{

        cy.get('[for="radio1"] > .radioButton')
          .check()
          .should('be.checked')

        
    });

    describe('Dropdown test', () =>{

        it('Static Dropdown', ()=>{

            cy.get('select')
              .select('option1')
              .should('have.value', 'option1')
               
        });
    
        it('Dinamic Dropdown', ()=>{

            cy.get('#autocomplete')
              .type('tur')

            cy.get('.ui-menu-item div')
              .each(($e1, index, $list) => {

                if ($e1.text()==='Turkmenistan') {

                    $e1.click()
                }

              })
              
               
        });

    });
});