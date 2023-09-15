import React from 'react';
import Link from 'next/link';
import SubscriptionTable from '../../../components/SubscriptionTable';
import ThemeToggle from '../../../components/ThemeToggle';

export const metadata = {
    title: 'Subscription Management',
    description: 'Keep track of all subscriptions and invoices for expense accounting',
}

export default function Home() {
    return (
        <>
            <section className="bg-white dark:bg-gray-900 mt-28 text-center p-6">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white">Subscription Management</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Keep track of all subscriptions and invoices for expense accounting</p>
            </section>
            <section className="bg-white dark:bg-gray-900 text-center p-6 flex flex-col items-center">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Instructions</h2>
                <ol className="max-w-md space-y-1 text-gray-500 list-decimal list-inside dark:text-gray-400 text-left">
                    <li>
                        <span className="font-semibold text-gray-900 dark:text-white">Delete</span> the subscription examples
                    </li>
                    <li>
                        <span className="font-semibold text-gray-900 dark:text-white">+</span> your own subscriptions
                    </li>
                    <li>
                        At the end of every month <span className="font-semibold text-gray-900 dark:text-white">ctrl/cmd-click on each row</span> to open the invoice page
                    </li>
                </ol>
            </section>
            <section className="bg-white dark:bg-gray-900 mt-3 text-center p-6 flex">
                <SubscriptionTable />
            </section>
        </>
    );
}
