import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class CheckoutStepTwoPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async finishCheckout() {
        await this.page.click('#finish');
    }
}
