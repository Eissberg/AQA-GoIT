describe('Тести до ДЗ другого уроку', () => {
  it('Тест для логінізації №1', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('user888@gmail.com');

    cy.get('#user_password').type('1234567890');

    cy.contains('Log in').click();

    cy.get('#open-navigation-menu-mobile').click();

    cy.contains('Log out').click();
  });

  it('Тест для логінізації №2', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('testowyqa@qa.team');

    cy.get('#user_password').type('QA!automation-1');

    cy.contains('Log in').click();

    cy.get('#open-navigation-menu-mobile').click();

    cy.contains('Log out').click();
  });
});
