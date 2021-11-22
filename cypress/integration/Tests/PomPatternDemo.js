import *as globalNavigations from '../../support/globalNavigations';
import *as userInformation from '../../support/userInformation';
import *as loginPage from '../../Pages/loginPage';

describe('Pom login test', () =>{

    it('login to the cydeo', () =>{

        globalNavigations.libraryLoginPage()
        //loginPage.emailInputBox(userInformation.username)
        cy.get(loginPage.userName).type(userInformation.username)
        loginPage.passwordInputBox(userInformation.password)
        loginPage.clickLoginButton()

        cy.wait(2000)


    });

    it('Verify that logged in succesfıly', () =>{

        cy.url()
          .should('eq', 'https://my.cydeo.com/member/my-programs/all')


    });


});