
describe('My test suite', () =>{
      
    before(() => {
        // root-level hook
        // runs once before all tests
        cy.log('This is setup block')
        cy.fixture('example').then(function (data) {
            this.data = data
        })
      })

      it('Fixtures Demo test', () =>{

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type(this.data.email)
        cy.get('#Password').clear().type(this.data.password)
        cy.get('.button-1').click()

    });

 /*  
    it('Fixtures Demo test', () =>{

        cy.visit('https://admin-demo.nopcommerce.com/login')
        cy.get('#Email').clear().type('admin@yourstore.com')
        cy.get('#Password').clear().type('admin')
        cy.get('.button-1').click()

    });
  */ 
});