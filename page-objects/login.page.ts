import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor'

export class LoginPage {
    private email: ElementFinder;
    private password: ElementFinder;
    private loginBtn: ElementFinder;
    private requiredEmail: ElementFinder;
    private requiredPass: ElementFinder;
    private invalidEmail: ElementFinder;
    private invalidPass: ElementFinder;

    constructor() {
        this.email = $('.login_form #users_models_LoginForm_username');
        this.password = $('.login_form #users_models_LoginForm_password');
        this.loginBtn = $('[name="yt3"]');
        this.requiredEmail = $('#login_form #users_models_LoginForm_username_em_');
        this.requiredPass = $('#login_form #users_models_LoginForm_password_em_');
        this.invalidEmail = $('#login_form #users_models_LoginForm_username_em_');
        this.invalidPass = $('#login_form #users_models_LoginForm_password_em_');
    };

    public async typeEmail(email) {
        await this.email.click();
        await this.email.clear();
        await this.email.sendKeys(email);
    };

    public async typePassword(password) {
        await this.password.click();
        await this.password.clear();
        await this.password.sendKeys(password);
    };

    public async sendCredentials() {
        await browser.wait(EC.visibilityOf(this.loginBtn), 5000, `Waiting for loginBtn`);
        await this.loginBtn.click();
    };

    public async logIn(email, password) {
        await this.typeEmail(email);
        await this.typePassword(password);
        await this.email.click();
        await this.sendCredentials();
    };

    public async logInWithInvalidPass(email, password) {
        await this.typeEmail(email);
        await this.typePassword(password);
        await this.sendCredentials();
        await browser.sleep(1000);
        await this.password.click();
        await browser.wait(EC.visibilityOf(this.invalidPass), 5000, 'Waiting for invalidPass');
    };

    public async logInWithoutCreds() {
        await this.email.click();
        await this.password.click();
        await this.sendCredentials();
    };

    public async requiredEmailError() {
        await browser.wait(EC.visibilityOf(this.requiredEmail), 5000, 'Waiting for requiredEmail');
        return await this.requiredEmail.getText();
    };

    public async requiredPassError() {
        await browser.wait(EC.visibilityOf(this.requiredPass), 5000, 'Waiting for requiredPass');
        return await this.requiredPass.getText();
    };

    public async invalidEmailError() {
        await browser.wait(EC.visibilityOf(this.invalidEmail), 5000, 'Waiting for invalidEmail');
        return await this.invalidEmail.getText();
    };

    public async invalidPasswordError() {
        await browser.wait(EC.visibilityOf(this.invalidPass), 9000, 'Waiting for invalidPass');
        return await this.invalidPass.getText();
    };
};