import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class InventoryPage extends BasePage {
    constructor(page: Page) {
        super(page, 'InventoryPage');
    }

    async openItemByName(name: string) {
        await this.page.click(`text=${name}`);
    }

    async addItemToCartByName(name: string) {
        await this.page.click(`xpath=//div[text()="${name}"]/ancestor::div[contains(@class,'inventory_item')]//button`);
    }
}
