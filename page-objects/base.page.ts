import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor';

export class BasePage {
    private _logo: ElementFinder;
    private _loginBtn: ElementFinder;
    private _userCondition: ElementFinder;
    private _searchField: ElementFinder;
    private _submitSearchBtn: ElementFinder;
    private _logoutBtn: ElementFinder;

    constructor() {
        this._logo = $('[src$="EKmGhkzN-x.png"]');
        this._loginBtn = $('#btnLoginOpen');
        this._userCondition = $('.btn-group [href="/profile"]');
        this._searchField = $('[name="q"]');
        this._submitSearchBtn = $('.submit-search');
        this._logoutBtn = $('.btn-group [href="/users/logout"]');
    };

    public async start() {
        await browser.get('/');
        await browser.wait(EC.visibilityOf(this._logo), 5000, `Waiting for logo`);
    };

    public async logInTextBtn() {
        await browser.wait(EC.visibilityOf(this._loginBtn), 5000, 'Waiting for loginBtn');
        return await this._loginBtn.getText();
    };

    public async logInInit() {
        await this._loginBtn.click();
    };

    public async userLogedIn() {
        await browser.wait(EC.visibilityOf(this._userCondition), 5000, `Waiting for userCondition`);
        return await this._userCondition.getText();
    };

    public async search(searchData) {
        await browser.wait(EC.visibilityOf(this._searchField), 5000, `Waiting for searchField`);
        await this._searchField.clear();
        await this._searchField.sendKeys(searchData);
        await this._submitSearchBtn.click();
    };

    public async logOut() {
        await browser.wait(EC.visibilityOf(this._logoutBtn), 5000, `Waiting for logoutBtn`);
        await this._logoutBtn.click();
    };
};