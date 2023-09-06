"use client"
import React, { useEffect, useState, useRef } from 'react';
import DrippingColumn from '@/app/components/DrippingColumn';
import Link from 'next/link';
import SubscriptionTable from '../components/SubscriptionTable';

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const colorTheme = localStorage.getItem('color-theme');
        const isDarkModeTemp = colorTheme ? colorTheme === 'dark' : prefersDarkMode;
        setIsDarkMode(isDarkModeTemp);
        // @ts-ignore
        document.querySelector("body").classList.add(isDarkModeTemp ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        const isDarkModeTemp = !isDarkMode;
        const newTheme = isDarkModeTemp ? 'dark' : 'light';
        setIsDarkMode(isDarkModeTemp);
        localStorage.setItem('color-theme', newTheme);
        // @ts-ignore
        document.querySelector("body").classList.remove('dark', 'light');
        // @ts-ignore
        document.querySelector("body").classList.add(newTheme);
    };

    const mainRef = useRef(null);
    const [mainHeight, setMainHeight] = useState(0);

    useEffect(() => {
        if (mainRef.current) {
            // @ts-ignore
            const mainHeight = mainRef.current.clientHeight;
            setMainHeight(mainHeight);
        }
    }, []);

    return (
        <>
            <nav className="bg-transparent fixed w-full z-10 top-0 left-0 ">
                <div className="max-w-screen-2xl flex flex-wrap flex-row-reverse lg:flex-row justify-between items-center lg:justify-end mx-auto px-4 py-1 relative bg-white dark:bg-gray-900 !bg-opacity-80">
                    <div className="flex gap-2 items-center">
                        <button
                            id="theme-toggle"
                            type="button"
                            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-3"
                            onClick={toggleTheme}
                        >
                            <svg
                                id="theme-toggle-dark-icon"
                                className={`${!isDarkMode ? 'w-5 h-5' : 'hidden w-5 h-5'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                            </svg>
                            <svg
                                id="theme-toggle-light-icon"
                                className={`${isDarkMode ? 'w-5 h-5' : 'hidden w-5 h-5'}`}
                                fill="currentColor"
                                viewBox="0 0 20 20"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z"
                                    fillRule="evenodd"
                                    clipRule="evenodd"
                                ></path>
                            </svg>
                        </button>
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

            <main ref={mainRef} className='mx-auto max-w-screen-lg'>
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
