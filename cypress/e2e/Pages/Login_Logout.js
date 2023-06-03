export class LogIn {
  inputEmail(email) {
    cy.get('#user_email').type(email);
  }

  inputPassword(password) {
    cy.get('#user_password').type(password);
  }

  clickLogIn() {
    cy.contains('Log in').click();
  }
}

export class LogOut {
  openBurgerMenu() {
    cy.get('#open-navigation-menu-mobile').click();
  }

  clickLogOut() {
    cy.contains('Log out').click();
  }
}
