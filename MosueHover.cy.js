describe('Mouse Hover Testing', () => {
  
    it('should perform a mouse hover on "Switch to" menu', () => {
      // Visit the page
      cy.visit('https://testautomationpractice.blogspot.com/2018/09/automation-form.html');
  
      // Target the element for the "Switch to" menu and trigger mouseover
      cy.get('button[class="dropbtn"]').trigger('mouseover');
  
      // Assert that the dropdown options are visible after hover
      cy.get('div.dropdown-content').contains('Mobiles');  // Update selector if necessary
    });
  
  });
  