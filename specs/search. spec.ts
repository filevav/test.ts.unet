import { browser } from "protractor";
import { BasePage } from "../page-objects/base.page";
import { SearchResultPage } from "../page-objects/search.result.page";

const goToBasePage : BasePage = new BasePage;
const goToSearchResult : SearchResultPage = new SearchResultPage;

beforeEach(async ()=> {
    await browser.waitForAngularEnabled(false);
    await goToBasePage.start();
    await browser.manage().deleteAllCookies();
});

describe('Search', () => {

    it('Search on the home page', async () => {
        const searchQuery = 'администрация';
        await goToBasePage.search(searchQuery);
        await expect(goToSearchResult.youLookingFor()).toMatch(`Вы искали: ${searchQuery}`);
    });
});