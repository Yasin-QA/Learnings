describe('Validate the login page', ()=>{
it('Validate the login page elements',()=>
cy.visit('www.demo page')
cy.get('#input-name').type('Username')
cy.get('input-password').type('password')
cy.get('submit-button').click().should('be'.'visible')

})
})
