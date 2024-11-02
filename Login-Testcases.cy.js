describe('Test Automation Login page',() =>{
    it('Login page tesing',() =>{
        cy.visit('https://practicetestautomation.com/practice-test-login/')
        //checking the login page elements
        cy.get('label[for="username"]').should('contain.text','Username')
        cy.get('label[for="password"]').should('contain.text','Password')
        cy.get('button[id="submit"]').should('be.visible','button[class="btn"]')
       
        //Verify the positive testing
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('.btn').click()
        cy.url('practicetestautomation.com/logged-in-successfully/')
        cy.contains('Logged In Successfully')
        cy.get('div[class="wp-block-button aligncenter is-style-fill"]').click()

        //Verify the negative testing Username
        cy.get('input#username').type('studen')
        cy.get('input#password').type('Password123')
        cy.get('.btn').click()
        cy.should('be.visible','Your username is invalid!')

        //Verify the negative testing password
        cy.wait(4000)
        cy.get('input#username').type('student')
        cy.get('input#password').type('Password13')
        cy.get('.btn').click()
        cy.should('be.visible','Your password is invalid!')


     })
})