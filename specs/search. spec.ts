import { browser } from "protractor";
import { BasePage } from "../page-objects/base.page";
import { SearchResultPage } from "../page-objects/search.result.page";
import { Constants } from "../page-objects/constants";

const goToBasePage : BasePage = new BasePage;
const goToSearchResult : SearchResultPage = new SearchResultPage;
const constant : Constants = new Constants;

beforeEach(async ()=> {
    await browser.waitForAngularEnabled(false);
    await goToBasePage.start();
    await browser.manage().deleteAllCookies();
});

describe('Search', () => {

    it('Search on the home page', async () => {
        await goToBasePage.search(constant.searchQuery());
        expect(await(goToSearchResult.youLookingFor())).toMatch('Вы искали:' + constant.searchQuery());
    });
});