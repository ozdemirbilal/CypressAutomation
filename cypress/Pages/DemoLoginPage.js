

class DemoLoginPage {

visit(){

    cy.visit('https://admin-demo.nopcommerce.com/login')
}

sendEmail(email){

    const field = cy.get('#Email')
    field.clear()
    field.type(email)
    return this
}

sendPassword(password){

    const field = cy.get('#Password')
    field.clear()
    field.type(password)
    return this
}

clickLogin(){
    cy.get('.button-1').click()
}



}

export default DemoLoginPage