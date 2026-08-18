import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class CartPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async proceedToCheckout() {
        await this.page.click('#checkout');
    }

    async getCartItems() {
        return this.page.$$eval('.cart_item', items => items.map(i => i.textContent?.trim()));
    }
}
