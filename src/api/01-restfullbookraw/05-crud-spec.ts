import { test, expect } from '@playwright/test';
import { logger } from '../../utils/logger';


interface Bookingdates {
    checkin: string;
    checkout: string;

}


interface BookingPayloaad {
    firstname: string;
    lastname: string;
    totalprice: number;
    depositpaid: boolean;
    bookingdates: Bookingdates;
    additionalneeds?: string;
}

interface AuthTokenResponse {
    token: string;
}

interface Bookingflowstate {
    token?: string;
    bookingId?: number;
}

interface CreateBookingResponse {
    bookingid: number;
    booking: BookingPayloaad;
}


test.describe.serial('Restful Booker API - Booking Flow', () => {
    const baseUrl = process.env.API_BASE_URL || 'https://restful-booker.herokuapp.com';
    const headers = {
        Accept: 'application/json',
        'Content-Type': 'application/json'
    };

    const bookingFlowState: Bookingflowstate = {};
    const bookingPayload: BookingPayloaad = {
        firstname: 'John',
        lastname: 'Doe',
        totalprice: 100,
        depositpaid: true,
        bookingdates: {
            checkin: '2024-06-01',
            checkout: '2024-06-10'
        },
        additionalneeds: 'Breakfast'
    };

    test('TC01 @P0 - Create token', async ({ request }) => {
        await test.step('Create token', async () => {
            // Implement the logic to create a token here
            const responsdata = await request.post(`${baseUrl}/auth`, {
                headers,
                data: {
                    username: 'admin',
                    password: 'password123'
                }
            });
            expect(responsdata.status()).toBe(200);
            const data = await responsdata.json() as AuthTokenResponse;
            expect(data.token).toBeTruthy();
            bookingFlowState.token = data.token;
            logger.info(`created the token for crud flow`);
        });
    });
    test('TC02 @P0 - create Booking', async ({ request }) => {
        await test.step('Create Booking', async () => {
            const responseData = await request.post(`${baseUrl}/booking`, {
                headers,
                data: bookingPayload,
            });
            expect(responseData.status()).toBe(200);
            const data = await responseData.json() as CreateBookingResponse;
            expect(data.bookingid).toBeTruthy();
            expect(data.booking.firstname).toBe(bookingPayload.firstname);
            expect(data.booking.lastname).toBe(bookingPayload.lastname);
            bookingFlowState.bookingId = data.bookingid;
            logger.info(`created the booking id for crud flow; bookingId: ${bookingFlowState.bookingId}`);
        });
    });

    test('TC03 @P0 - update Booking', async ({ request }) => {

        const token = bookingFlowState.token;
        const bookingId = bookingFlowState.bookingId;
        if (!token || !bookingId) {
            throw new Error('Token or Booking ID is missing. Cannot update booking.');
        }
    });

});