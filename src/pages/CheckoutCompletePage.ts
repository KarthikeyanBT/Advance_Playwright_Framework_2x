import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class CheckoutCompletePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async getConfirmationText() {
        return this.page.textContent('.complete-header');
    }
}
