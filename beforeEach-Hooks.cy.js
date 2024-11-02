describe('Application page with hooks',()=>{
  beforeEach(()=>{
    it('Login page verification',()=>{
    cy.visit('https://practicetestautomation.com/practice-test-login/')
    cy.get('input#username').type('student')
        cy.get('input#password').type('Password123')
        cy.get('.btn').click()
        cy.url('practicetestautomation.com/logged-in-successfully/')
        cy.contains('Logged In Successfully')

      it('')

    })
  })
})