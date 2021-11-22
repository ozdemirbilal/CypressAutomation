
describe('Custom suite', () =>{

      it('Login test', () =>{

        cy.demoLogin('admin@yourstore.com','admin')//we create custom 'demoLogin' command
          .title().should('eq','Dashboard / nopCommerce administration')


    });

    it('Add Customer', () =>{

        cy.demoLogin('admin@yourstore.com','admin')

        cy.log('Adding customer...........')

    });

    it('Edit Customer', () =>{

        cy.demoLogin('admin@yourstore.com','admin')

        cy.log('Editing customer...........')

    });

});