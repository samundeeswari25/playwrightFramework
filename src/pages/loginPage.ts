import { Page } from '@playwright/test';
import { BasePage } from '../base/BasePage';

export class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    private username = this.page.locator('#username');
    private password = this.page.locator('#password');
    private loginBtn = this.page.locator('#login');

    async login(user: string, pass: string) {
        await this.enterText(this.username, user);
        await this.enterText(this.password, pass);
        await this.clickElement(this.loginBtn);
    }
}