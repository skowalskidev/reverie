// app/actions.js
'use server';

import { cookies } from 'next/headers';

export async function setToastCookie() {
    const cookieStore = cookies();

    const oneHourInSeconds = 60 * 60;
    cookieStore.set('toastDismissed', 'true', { maxAge: oneHourInSeconds });
}
