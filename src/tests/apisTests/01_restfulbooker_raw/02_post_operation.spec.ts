import { test, expect } from '@playwright/test';
import { logger } from '@utils/logger';

test('Create the booking', async ({ request }) => {

    const baseUrl = process.env.API_BASE_URL || 'https://restful-booker.herokuapp.com';
    const payload = {
        firstname: 'Jim',
        lastname: 'Brown',
        totalprice: 111,
        depositpaid: true,
        bookingdates: {
            checkin: '2018-01-01',
            checkout: '2019-01-01',
        },
        additionalneeds: 'Breakfast',
    };

    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json',
    };


    const response = await request.post(`${baseUrl}/booking`, {
        headers: headers,
        data: payload
    });

    expect(response.status()).toBe(200);
    expect(response.ok()).toBeTruthy();
    const data = await response.json();
    console.log(data);

    expect(data.bookingid).toBeTruthy();
    expect(data.booking.firstname).toBe(payload.firstname);
    expect(data.booking.lastname).toBe(payload.lastname);
    logger.info(`Booking created with ID: ${data.bookingid}`);



});