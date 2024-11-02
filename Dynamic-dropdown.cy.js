describe('Dynamic Dropdown Test', () => {
  
    it('should select an option from a dynamic dropdown', () => {
      // Visit the page with the dynamic dropdown
      cy.visit('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');  // Replace with your URL
  
      // Type in the search box to trigger dropdown options
      cy.get('input#comboBox').type('Item 10');  // Replace #citySearch with the actual selector
  
      // Wait for dropdown options to appear and select a specific one by text
      cy.get('div#dropdown')          // Replace .dropdown-option with the actual selector for options
        .contains('Item 10')             // Look for an option that contains 'New York'
        .click();
  
      // Assert the correct option was selected
      cy.get('input#comboBox').should('have.value', 'Item 10');
    });
  });
  