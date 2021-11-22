

describe('Table elements', () =>{

    it('Table test 1', () =>{

        cy.visit('http://testautomationpractice.blogspot.com/')

        //1-Check value precence anywhere in the table
        cy.get('table[name=BookTable]').contains('td','Learn Selenium').should('be.visible')

        //2- Check value precence in specific row and column
        cy.get('tbody > :nth-child(2) > :nth-child(3)').contains('Selenium').should('be.visible')


    });

    it('Table test 2', () =>{

        cy.get('table[name=BookTable]>tbody>tr td:nth-child(2)')
          .each(($e1, index, $list) => {

            if ($e1.text()==='Amod') {

                cy.get('table[name=BookTable]>tbody>tr td:nth-child(1)').eq(index).then(function (bname) {
                    const bookName = bname.text()
                    expect(bookName).to.equal('Master In Java')
                })


            }

          })


    });


});