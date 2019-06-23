import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor';

export class LoginPage {
    private _email: ElementFinder;
    private _password: ElementFinder;
    private _loginBtn: ElementFinder;
    private _requiredEmail: ElementFinder;
    private _requiredPass: ElementFinder;
    private _invalidEmail: ElementFinder;
    private _invalidPass: ElementFinder;

    constructor() {
        this._email = $('.login_form #users_models_LoginForm_username');
        this._password = $('.login_form #users_models_LoginForm_password');
        this._loginBtn = $('[name="yt3"]');
        this._requiredEmail = $('#login_form #users_models_LoginForm_username_em_');
        this._requiredPass = $('#login_form #users_models_LoginForm_password_em_');
        this._invalidEmail = $('#login_form #users_models_LoginForm_username_em_');
        this._invalidPass = $('#login_form #users_models_LoginForm_password_em_');
    };

    public async typeEmail(email) {
        await this._email.click();
        await this._email.clear();
        await this._email.sendKeys(email);
    };

    public async typePassword(password) {
        await this._password.click();
        await this._password.clear();
        await this._password.sendKeys(password);
    };

    public async sendCredentials() {
        await browser.wait(EC.visibilityOf(this._loginBtn), 5000, `Waiting for loginBtn`);
        await this._loginBtn.click();
    };

    public async logIn(email, password) {
        await this.typeEmail(email);
        await this.typePassword(password);
        await this._email.click();
        await this.sendCredentials();
    };

    public async logInWithInvalidPass(email, password) {
        await this.typeEmail(email);
        await this.typePassword(password);
        await this.sendCredentials();
        await browser.sleep(1000);
        await this._password.click();
        await browser.wait(EC.visibilityOf(this._invalidPass), 5000, 'Waiting for invalidPass');
    };

    public async logInWithoutCreds() {
        await this._email.click();
        await this._password.click();
        await this.sendCredentials();
    };

    public async requiredEmailError() {
        await browser.wait(EC.visibilityOf(this._requiredEmail), 5000, 'Waiting for requiredEmail');
        return await this._requiredEmail.getText();
    };

    public async requiredPassError() {
        await browser.wait(EC.visibilityOf(this._requiredPass), 5000, 'Waiting for requiredPass');
        return await this._requiredPass.getText();
    };

    public async invalidEmailError() {
        await browser.wait(EC.visibilityOf(this._invalidEmail), 5000, 'Waiting for invalidEmail');
        return await this._invalidEmail.getText();
    };

    public async invalidPasswordError() {
        await browser.wait(EC.visibilityOf(this._invalidPass), 9000, 'Waiting for invalidPass');
        return await this._invalidPass.getText();
    };
};