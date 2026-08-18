import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class LoginPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async login(username: string, password: string) {
        await this.page.fill('#user-name', username);
        await this.page.fill('#password', password);
        await this.page.click('#login-button');
    }
}
