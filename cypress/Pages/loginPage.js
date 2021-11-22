
export const userName = '#Username-Field';
/*
export function emailInputBox(email) {

    cy.get('#Username-Field')
      .type(email);
    
}
*/
export function passwordInputBox(password) {

    cy.get('#Password-Field')
          .type(password)
    
}

export function clickLoginButton() {

    cy.get('.NS-Auth-Button-Submit')
      .click()
    
}