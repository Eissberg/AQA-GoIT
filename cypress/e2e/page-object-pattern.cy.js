import { LoginPage } from './Pages/Login_POP';

const loginPage = new LoginPage();

describe('Page obj example', () => {
  it('Login page', () => {
    //visit our website
    // cy.visit('https://www.edu.goit.global/account/login');

    // //check our title
    // cy.get('.css-10stgr7 > .css-c1vj7d').should('be.visible');
    // cy.get('.css-10stgr7 > .css-c1vj7d').should('have.text', 'Login');

    // //check our inputs
    // cy.get('#user_email').should('be.visible');
    // cy.get('#user_password').should('be.visible');

    // //check Login button
    // cy.contains('Log in').should('be.visible');

    // //check reset pass
    // cy.get('[href="/account/password/restore"]').should('be.visible');
    // cy.get('[href="/account/password/restore"]').should(
    //   'have.text',
    //   "I can't remember the password"
    // );

    loginPage.navigateToPage();

    loginPage.validateLoginTitle();

    loginPage.validateInputs();

    loginPage.validateLoginButton();

    loginPage.validatePasswordLink();
  });
});
