import { browser } from "protractor";
import { BasePage } from "../page-objects/base.page";
import { LoginPage } from "../page-objects/login.page";

const goToBasePage : BasePage = new BasePage;
const goToLoginPage : LoginPage = new LoginPage;

beforeEach(async ()=> {
    await browser.waitForAngularEnabled(false);
    await goToBasePage.start();
    await browser.manage().deleteAllCookies();
});

describe('Login with valid data', () => {

    it('Login with valid credentials and logout', async () => {
        await goToBasePage.loginInit();
        await goToLoginPage.login('qa', 'secret');
        await expect(goToBasePage.userLogedIn()).toMatch("Профиль");
        await goToBasePage.logout();
        await expect(goToBasePage.logInBtn()).toMatch("Вход");
    });
});

describe('Login with invalid data', () => {

    it('Login without credentials', async () => {
        await goToBasePage.loginInit();
        await goToLoginPage.logInWithoutCreds();
        await expect(goToLoginPage.requiredEmailError()).toMatch("Необходимо заполнить поле «Email».");
        await expect(goToLoginPage.requiredPassError()).toMatch("Необходимо заполнить поле «Пароль».");
    });

    it('Login with invalid email', async () => {
        await goToBasePage.loginInit();
        await goToLoginPage.login('qa', 'secret');
        await expect(goToLoginPage.invalidEmailError()).toMatch("Неправильный email");
    });

    it('Login with invalid password', async () => {
        await goToBasePage.loginInit();
        await goToLoginPage.login('qwer@q.a', '1');
        await expect(goToLoginPage.invalidPasswordError()).toMatch("Неправильный пароль");
    });
});
