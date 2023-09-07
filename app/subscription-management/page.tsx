import React from 'react';
import Link from 'next/link';
import SubscriptionTable from '../components/SubscriptionTable';
import ThemeToggle from '../components/ThemeToggle';

export default function Home() {
    return (
        <>
            <nav className="bg-transparent fixed w-full z-10 top-0 left-0 ">
                <div className="max-w-screen-2xl flex flex-wrap flex-row-reverse lg:flex-row justify-between items-center lg:justify-end mx-auto px-4 py-1 relative bg-white dark:bg-gray-900 !bg-opacity-80">
                    <div className="flex gap-2 items-center">
                        <ThemeToggle />
                    </div>
                    <div className="items-center justify-center w-fit md:flex md:order-1 lg:absolute lg:mx-auto lg:left-0 lg:right-0" id="navbar-sticky">
                        <ul className="grow px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0">
                            <li>
                                <Link href="/" className="flex items-top text-sm font-light text-gray-500/100 dark:text-gray-400/100 tracking-wider">
                                    <p className="text-sm tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">Reverie Zero</p>
                                </Link>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className='mx-auto max-w-screen-lg'>
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
            </main >

            <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <Link href="/" className="hover:underline">Reverie Zero</Link></span>
                </div>
            </footer>
        </>
    );
}
