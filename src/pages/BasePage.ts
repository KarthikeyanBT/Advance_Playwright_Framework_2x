import { Page } from '@playwright/test';

export default class BasePage {
    protected readonly page: Page;

    protected constructor(page: Page, scope: string) {
        this.page = page;
    }

    protected async goto(relativepath: string): Promise<void> {
        await this.page.goto(relativepath);
        await this.page.waitForLoadState('domcontentloaded');
    }
}
