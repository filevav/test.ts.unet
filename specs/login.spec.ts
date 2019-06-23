import { browser } from "protractor";
import { BasePage } from "../page-objects/base.page";
import { LoginPage } from "../page-objects/login.page";
import { Constants } from "../page-objects/constants";

const goToBasePage : BasePage = new BasePage,
      goToLoginPage : LoginPage = new LoginPage,
      constant : Constants = new Constants;

beforeEach(async ()=> {
    await browser.waitForAngularEnabled(false);
    await goToBasePage.start();
    await browser.manage().deleteAllCookies();
});

describe('Login with valid data', () => {

    it('Login with valid credentials and logout', async () => {
        await goToBasePage.logInInit();
        await goToLoginPage.logIn(constant.validEmail(), constant.validPassword());
        await expect(goToBasePage.userLogedIn()).toMatch("Профиль");
        await goToBasePage.logOut();
        await expect(goToBasePage.logInTextBtn()).toMatch("Вход");
    });
});

describe('Login with invalid data', () => {

    it('Login without credentials', async () => {
        await goToBasePage.logInInit();
        await goToLoginPage.logInWithoutCreds();
        await expect(goToLoginPage.requiredEmailError()).toMatch("Необходимо заполнить поле «Email».");
        await expect(goToLoginPage.requiredPassError()).toMatch("Необходимо заполнить поле «Пароль».");
    });

    it('Login with invalid email', async () => {
        await goToBasePage.logInInit();
        await goToLoginPage.logIn(constant.invalidEmail(), constant.validPassword());
        await expect(goToLoginPage.invalidEmailError()).toMatch("Неправильный email");
    });

    it('Login with invalid password', async () => {
        await goToBasePage.logInInit();
        await goToLoginPage.logInWithInvalidPass(constant.validEmail(), constant.invalidPassword());
        await expect(goToLoginPage.invalidPasswordError()).toMatch("Неправильный пароль");
    });
});
