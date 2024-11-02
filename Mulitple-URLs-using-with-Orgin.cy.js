describe('Visit multiple domains and assert on selected one', () => {
  
    // Visit the first domain
    it('should visit https://example.com', () => {
      cy.origin('https://example.com', () => {
        cy.visit('/');
        cy.url().should('include', 'example.com');
        cy.contains('Example Domain');  // Adjust content check for this domain
      });
    });
  
    // Visit the second domain
    it('should visit https://another-example.com', () => {
      cy.origin('https://another-example.com', () => {
        cy.visit('/');
        cy.url().should('include', 'another-example.com');
        cy.contains('Another Example');  // Adjust content check for this domain
      });
    });
  
    // Visit the third domain and perform final assertions
    it('should visit https://third-example.com and assert content', () => {
      cy.origin('https://testautomationpractice.blogspot.com/2018/09/automation-form.html', () => {
        cy.visit('/');
        cy.url().should('include', 'automation-form');
        
        // Assertions specific to this URL
        cy.get('h1').should('contain.text', 'Welcome to Third Example');
        cy.get('.main-content').should('be.visible');
      });
    });
  });
  