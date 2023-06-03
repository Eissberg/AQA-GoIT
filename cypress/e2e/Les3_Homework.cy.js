import { HomePage } from './Pages/HomePage';
import { LogIn } from './Pages/Login_Logout';
import { LogOut } from './Pages/Login_Logout';

const homePage = new HomePage();
const logIn = new LogIn();
const logOut = new LogOut();

describe('Тести до ДЗ третього уроку', () => {
  it('Тест для логінізації №1', () => {
    homePage.navigateToPage();
    logIn.inputEmail('user888@gmail.com');
    logIn.inputPassword('1234567890');
    logIn.clickLogIn();
    logOut.openBurgerMenu();
    logOut.clickLogOut();
  });

  it('Тест для логінізації №2', () => {
    homePage.navigateToPage();
    logIn.inputEmail('testowyqa@qa.team');
    logIn.inputPassword('QA!automation-1');
    logIn.clickLogIn();
    logOut.openBurgerMenu();
    logOut.clickLogOut();
  });
});
