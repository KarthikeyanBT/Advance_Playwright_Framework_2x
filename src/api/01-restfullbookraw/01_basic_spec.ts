import { test, expect } from '@playwright/test';

test('Restful Booker API - GET', async ({ request }) => {
    const response = await request.get('/ping');

    console.log(response);
    expect(response.status()).toBe(201);
});
