describe('Тести до другого уроку', () => {
  it('Тест для логінізації', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('user888@gmail.com');

    cy.get('#user_password').type('1234567890');

    cy.contains('Log in').click();
  });

  it('Тест для кнопки Log in', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('[type="submit"]').should('have.text', 'Log in');

    cy.get('[type="submit"]').should(
      'have.css',
      'background-color',
      'rgb(255, 107, 10)'
    );
  });

  it('Тест скролу сторінки', () => {
    cy.visit('https://www.edu.goit.global/account/login');

    cy.get('#user_email').type('user888@gmail.com');

    cy.get('#user_password').type('1234567890');

    cy.contains('Log in').click();

    cy.get('#go-to-the-course-homepage-widget')
      .scrollIntoView()
      .should('be.visible');
  });
});
