import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor'

export class BasePage {
    private logo: ElementFinder;
    private loginBtn: ElementFinder;
    private userCondition: ElementFinder;
    private searchField: ElementFinder;
    private submitSearchBtn: ElementFinder;
    private logoutBtn: ElementFinder;


    constructor() {
        this.logo = $('[src$="EKmGhkzN-x.png"]');
        this.loginBtn = $('#btnLoginOpen');
        this.userCondition = $('.btn-group [href="/profile"]');
        this.searchField = $('[name="q"]');
        this.submitSearchBtn = $('.submit-search');
        this.logoutBtn = $('.btn-group [href="/users/logout"]');
    };

    public async logInBtn() {
        await browser.wait(EC.visibilityOf(this.loginBtn), 5000, 'Waiting for loginBtn');
        return await this.loginBtn.getText();
    };

    public async loginInit() {
        await this.loginBtn.click();
    };

    public async start() {
        await browser.get('/');
        await browser.wait(EC.visibilityOf(this.logo), 5000, `Waiting for logo`);
    };

    public async userLogedIn() {
        await browser.wait(EC.visibilityOf(this.userCondition), 5000, `Waiting for userCondition`);
        return await this.userCondition.getText();
    };

    public async search(searchData) {
        await browser.wait(EC.visibilityOf(this.searchField), 5000, `Waiting for searchField`);
        await this.searchField.clear();
        await this.searchField.sendKeys(searchData);
        await this.submitSearchBtn.click();
    };

    public async logout() {
        await browser.wait(EC.visibilityOf(this.logoutBtn), 5000, `Waiting for logoutBtn`);
        await this.logoutBtn.click();
    };
};