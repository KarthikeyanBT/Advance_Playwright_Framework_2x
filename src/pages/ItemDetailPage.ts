import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class ItemDetailPage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async addToCart() {
        await this.page.click('#add-to-cart-button');
    }

    async backToInventory() {
        await this.page.click('#back-to-products');
    }
}
