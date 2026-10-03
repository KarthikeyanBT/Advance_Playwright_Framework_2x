import { test, expect, request } from '@playwright/test';


test('new context for isolated header', async () => {
    const ctx = await request.newContext({
        baseURL: 'https://gorest.co.in',
        extraHTTPHeaders: {
            'x-my-header': 'demo-123'
        },
        timeout: 15_000,
    });

    const ping = await ctx.get('/public/v2/users');
    console.log(await ping.json());
    expect(ping.status()).toBe(200);
    await ctx.dispose();
});