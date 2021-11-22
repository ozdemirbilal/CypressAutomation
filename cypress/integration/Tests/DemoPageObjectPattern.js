
import DemoLoginPage from '../../Pages/DemoLoginPage'

describe('Page object model test', () =>{
      

      it('Login test', () =>{

        const lp = new DemoLoginPage()
        lp.visit()
        lp.sendEmail('admin@yourstore.com')
        lp.sendPassword('admin')
        lp.clickLogin()

        cy.title().should('eq','Dashboard / nopCommerce administration')

    });

 

});