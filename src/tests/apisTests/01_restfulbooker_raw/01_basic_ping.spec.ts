import { test, expect } from '@playwright/test';
import { request } from 'node:http';

test('Getting the ping response', async ({ request }) => {
        const responsedata = await request.get('/ping');
        console.log(responsedata);
        expect(responsedata.status()).toBe(201);
});

