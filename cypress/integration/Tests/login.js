
import *as globalNavigations from '../../support/globalNavigations';
import *as userInformation from '../../support/userInformation';


describe('Login to the library aplication', () =>{

  before(() => {
    // root-level hook
    // runs once before all tests
    cy.log('This is setup block')
  })
  
  after(() => {
    // runs once all tests are done
    cy.log('This is tear down block')
  })
  
  beforeEach(() => {
    // root-level hook
    // runs before every test block
    cy.log('This is login block')
  })
  
  afterEach(() => {
    // runs after each test block
    cy.log('This is logout block')
  })

    it('Navigate to the library login page', () =>{

        //cy.visit('https://my.cydeo.com/login')

        globalNavigations.libraryLoginPage()

    });

    it('Input email and password', () =>{

       /* cy.get('label')//input
          .contains('Email address')//text---- we can use this method to locate--using text with css
          .type(userInformation.username);
        */

        /* cy.contains('Email address')//text---- we can use only contains() method
          .type(userInformation.username);
        */

        cy.get('#Username-Field')
          .type(userInformation.username);

        cy.get('#Password-Field')
          .type(userInformation.password)
        
    });

    it('Click to the sign in button', () =>{

        cy.get('.NS-Auth-Button-Submit')
          .click()

        /* cy.contains('Login')//we can use this way
             .click()
        */  

    });

    it('Verify that logged in succesfully', () =>{

        cy.url()
          .should('eq', 'https://my.cydeo.com/member/my-programs/all')

        cy.title()
          .should('eq','Login – Cydeo')
        
    });

});