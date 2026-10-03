import { test, expect } from '@playwright/test';

test('TTAcart login and logout flow', async ({ page }) => {
    await page.goto('https://app.thetestingacademy.com/playwright/ttacart/');

    await page.locator('[data-test="username"]').fill('standard_user');
    await page.locator('[data-test="password"]').fill('tta_secret');
    await page.locator('[data-test="login-button"]').click();

    await expect(page).toHaveURL(/\/inventory/);
    await expect(page.locator('[data-test="title"]')).toHaveText('Products');

    await page.locator('#react-burger-menu-btn').click();
    await page.locator('[data-test="logout-sidebar-link"]').click();

    await expect(page).toHaveURL(/\/ttacart\/\/?$/);
    await expect(page.locator('[data-test="login-button"]')).toBeVisible();
});
