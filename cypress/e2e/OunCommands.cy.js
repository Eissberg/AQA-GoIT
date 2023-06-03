describe('Тести до другого уроку', () => {
  it('Тест валідації як покупець', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    // cy.get('#user_email').type('user888@gmail.com');

    // cy.get('#user_password').type('1234567890');

    // cy.contains('Log in').click();

    cy.signIn('user888@gmail.com', '1234567890');
  });

  it('Тест валідації як адміністратор', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    // cy.get('#user_email').type('nadia.tsomko.98@gmail.com');

    // cy.get('#user_password').type('Nadia_Tsomko78');

    // cy.contains('Log in').click();

    cy.signIn('nadia.tsomko.98@gmail.com', 'Nadia_Tsomko78');
  });

  it('Тест валідації як менеджер', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    // cy.get('#user_email').type('user888@gmail.com');

    // cy.get('#user_password').type('1234567890');

    // cy.contains('Log in').click();

    cy.signIn('user888@gmail.com', '1234567890');
  });
});
