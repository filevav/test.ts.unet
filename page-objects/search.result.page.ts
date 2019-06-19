import { ElementFinder, $, browser, ExpectedConditions as EC } from 'protractor'

export class SearchResultPage {
    private lookingFor: ElementFinder;

    constructor() {
        this.lookingFor = $('.page-title');
    };

    public async youLookingFor() {
        await browser.wait(EC.visibilityOf(this.lookingFor), 5000, 'Waiting for lookingFor');
        return await this.lookingFor.getText();
    };
};