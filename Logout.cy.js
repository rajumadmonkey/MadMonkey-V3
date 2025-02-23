describe('Logout Feature', () => {

    before(() => {
      // Run login steps before testing logout (e.g., visit login page, log in, etc.)
      cy.visit('https://madmonkeyhostels.com/madder-experience/login');  // Replace with the login page URL
      cy.get('input[name="username"]').type('your-username');  // Replace with your username field
      cy.get('input[name="password"]').type('your-password');  // Replace with your password field
      cy.get('button[type="submit"]').click();  // Assuming the login button is a submit button
      cy.url().should('include', '/dashboard');  // Ensure login is successful and you're redirected to the dashboard (update URL accordingly)
    });
  
    it('should log out successfully', () => {
        // Visit the dashboard or page where the logout option is visible
        cy.visit('https://your-app.com/dashboard');  // Replace with your dashboard URL
    
        // Click on the logout button
        cy.get('[data-testid="logout-button"]').click();  // Replace with actual logout button selector
    
        // Verify that the user is redirected to the login page after logout
        cy.url().should('include', '/login');  // Ensure the user is redirected to the login page
        cy.get('input[name="username"]').should('be.visible');  // Ensure username field is visible (confirming you're on the login page)
      }); 

});