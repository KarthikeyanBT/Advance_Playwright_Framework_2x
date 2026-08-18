import BasePage from './BasePage';
import { Page } from '@playwright/test';

export default class CheckoutStepOnePage extends BasePage {
    constructor(page: Page) {
        super(page);
    }

    async fillCustomerInformation(firstName: string, lastName: string, postalCode: string) {
        await this.page.fill('#first-name', firstName);
        await this.page.fill('#last-name', lastName);
        await this.page.fill('#postal-code', postalCode);
        await this.page.click('#continue');
    }
}
