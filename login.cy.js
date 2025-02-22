describe('Login Feature', () => {
    // Define the URL of the login page
    const loginUrl = 'https://yourwebsite.com/login'; // Replace with your actual login URL
    const validUsername = 'testuser'; // Replace with a valid username
    const validPassword = 'testpassword'; // Replace with a valid password
    const invalidUsername = 'invaliduser';
    const invalidPassword = 'invalidpassword';
  
    it('should log in with valid credentials', () => {
      // Visit the login page
      cy.visit(loginUrl);
  
      // Find username field and type in a valid username
      cy.get('input[name="username"]') // Replace with your actual username field selector
        .type(validUsername)
        .should('have.value', validUsername);
  
      // Find password field and type in a valid password
      cy.get('input[name="password"]') // Replace with your actual password field selector
        .type(validPassword)
        .should('have.value', validPassword);
  
      // Click the login button
      cy.get('button[type="submit"]') // Replace with your actual submit button selector
        .click();
  
      // Assert that the user is redirected to the homepage or dashboard
      cy.url().should('include', '/dashboard'); // Modify to match your successful login URL
  
      // Optionally, check if a user-specific element is present to confirm successful login
      cy.get('.user-greeting') // Replace with an element that confirms login
        .should('contain', 'Welcome, testuser');
    });
  
    it('should show an error with invalid credentials', () => {
      // Visit the login page
      cy.visit(loginUrl);
  
      // Find username field and type in an invalid username
      cy.get('input[name="username"]')
        .type(invalidUsername)
        .should('have.value', invalidUsername);
  
      // Find password field and type in an invalid password
      cy.get('input[name="password"]')
        .type(invalidPassword)
        .should('have.value', invalidPassword);
  
      // Click the login button
      cy.get('button[type="submit"]')
        .click();
  
      // Assert that an error message is displayed
      cy.get('.error-message') // Replace with your actual error message element
        .should('be.visible')
        .and('contain', 'Invalid username or password');
    });
  });
  