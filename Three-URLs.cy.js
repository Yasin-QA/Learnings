describe('Verify one of three URLs loads successfully', () => {
    const urls = [
      'https://example.com/page1',
      'https://example.com/page2',
      'https://example.com/page3'
    ];
  
    it('should load at least one URL successfully', () => {
      let pageLoaded = false;
  
      urls.forEach((url) => {
        cy.request({
          url: url,
          failOnStatusCode: false // Don't fail the test if a URL fails
        }).then((response) => {
          if (response.status === 200 && !pageLoaded) {
            pageLoaded = true;
            cy.visit(url);
            cy.log(`Successfully loaded: ${url}`);
          }
        });
      });
  
      cy.then(() => {
        expect(pageLoaded).to.be.true;
      });
    });
  });
  