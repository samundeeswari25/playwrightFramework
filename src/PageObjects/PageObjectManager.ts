import { Page } from '@playwright/test';
import { LoginPage } from '../pages/loginPage';


export class PageObjectManager {
    private page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    getLoginPage() {
        return new LoginPage(this.page);
    }

   
}