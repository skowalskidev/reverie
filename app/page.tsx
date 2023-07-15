"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image'
import MatrixEffect from './components/MatrixEffect';

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const colorTheme = localStorage.getItem('color-theme');
        const isDarkModeTemp = colorTheme ? colorTheme === 'dark' : prefersDarkMode;
        setIsDarkMode(isDarkModeTemp);
        document.querySelector("body").classList.add(isDarkModeTemp ? 'dark' : 'light');
    }, []);

    const toggleTheme = () => {
        const isDarkModeTemp = !isDarkMode;
        const newTheme = isDarkModeTemp ? 'dark' : 'light';
        setIsDarkMode(isDarkModeTemp);
        localStorage.setItem('color-theme', newTheme);
        document.querySelector("body").classList.remove('dark', 'light');
        document.querySelector("body").classList.add(newTheme);
    };

    const [estimate, setEstimate] = useState({
        developerHours: 0,
        hourlyRate: 0,
        designerHours: 0,
        designerHourlyRate: 0,
        developmentCost: 0,
        designerCost: 0,
        hostingCost: 0,
        cdnCost: 0,
        ourFee: 0,
        totalEstimate: 0,
    });

    const [numberOfPages, setNumberOfPages] = useState(1);
    const [websiteDescription, setWebsiteDescription] = useState('');

    // Function to calculate the estimate using AI
    const calculateEstimate = () => {
        // Replace this placeholder logic with your actual AI estimation implementation
        const developerHours = numberOfPages * 10; // Placeholder value
        const hourlyRate = 50; // Placeholder value
        const designerHours = numberOfPages * 5; // Placeholder value
        const designerHourlyRate = 30; // Placeholder value
        const developmentCost = developerHours * hourlyRate;
        const designerCost = designerHours * designerHourlyRate;
        const hostingCost = 100; // Placeholder value
        const cdnCost = 50; // Placeholder value
        const ourFee = (developmentCost + designerCost + hostingCost + cdnCost) * 0.10;
        const totalEstimate = developmentCost + designerCost + hostingCost + cdnCost + ourFee;

        setEstimate({
            developerHours,
            hourlyRate,
            designerHours,
            designerHourlyRate,
            developmentCost,
            designerCost,
            hostingCost,
            cdnCost,
            ourFee,
            totalEstimate,
        });
    };

    const handleNumberOfPagesChange = (e) => {
        let newValue = e.target.value;

        // Remove leading zero if present and value is not empty
        if (newValue.length > 1 && newValue.startsWith("0")) {
            newValue = newValue.slice(1);
        }

        setNumberOfPages(newValue);
    };

    const handleWebsiteDescriptionChange = (event) => {
        setWebsiteDescription(event.target.value);
    };

    return (
        <>
            {/* <div className="fixed w-full top-4 z-10 px-4 flex justify-between">
                <div>
                    <p className="text-lg font-light text-gray-500/100 dark:text-gray-400/100">Reverie</p>
                    <p className="ml-4 text-lg font-light text-gray-500/50 dark:text-gray-400/50">Reverie</p>
                    <p className="ml-2 text-lg font-light text-gray-500/25 dark:text-gray-400/25">Reverie</p>
                </div>
                <div>
                    <button
                        id="theme-toggle"
                        type="button"
                        className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
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
            </div> */}

            <nav className="bg-white dark:bg-gray-900 fixed w-full z-20 top-0 left-0 ">
                <div className="max-w-screen-2xl flex flex-wrap items-center justify-between mx-auto px-4 py-2">
                    <a href="#" className="flex items-top">
                        <p className="text-lg font-light text-gray-500/100 dark:text-gray-400/100">Reverie</p>
                        <p className="hidden sm:block ml-2 text-lg font-light text-gray-500/50 dark:text-gray-400/50">Reverie</p>
                        <p className="hidden sm:block ml-2 text-lg font-light text-gray-500/25 dark:text-gray-400/25">Reverie</p>
                    </a>
                    <div className="flex md:order-2 gap-2 items-center">
                        <button type="button" className="grow inline-flex items-center justify-center p-0.5 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
                            <a href="#get-estimate" className='grow px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0'>
                                Get estimate
                            </a>
                        </button>

                        <button
                            id="theme-toggle"
                            type="button"
                            className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
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
                        <button data-collapse-toggle="navbar-sticky" type="button" className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-sticky" aria-expanded="false">
                            <span className="sr-only">Open main menu</span>
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M1 1h15M1 7h15M1 13h15" />
                            </svg>
                        </button>
                    </div>
                    <div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
                        <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
                            <li>
                                <a href="#free-guide" className="block py-2 pl-3 pr-4 text-gray-900 rounded hover:bg-gray-100 md:hover:bg-transparent md:hover:text-purple-600 md:p-0 md:dark:hover:text-purple-600 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700">Free guide</a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <button
                id="theme-toggle"
                type="button"
                className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
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

            <main className='mx-auto max-w-screen-lg'>
                <section id='get-estimate' className="bg-white dark:bg-gray-900 mt-28 flex items-end">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:py-16 lg:grid-cols-12 grow items-center">
                        <div className="mr-auto place-self-center lg:col-span-7 flex flex-col gap-4">
                            <div className='h-[300px] relative overflow-hidden rounded'>
                                <MatrixEffect />
                            </div>
                            <h1 className=" items-center text-5xl font-extrabold text-gray-900 dark:text-white">100% <mark className="px-2 text-white dark:text-gray-900 bg-gradient-to-br from-purple-600 to-blue-500 rounded dark:bg-blue-500">transparent</mark>  <br></br>web development</h1>

                            <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">Websites at fair prices</p>
                        </div>
                        <div className="lg:mt-0 lg:col-span-5 flex flex-col">
                            {!(estimate.developerHours > 0 && estimate.hourlyRate > 0) && (
                                <>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Get a quick estimate</h2>
                                    <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-3'>

                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white text-center">How many pages?</h3>
                                        <ul className="grid w-full gap-3 md:grid-cols-4">
                                            <li>
                                                <input
                                                    type="radio"
                                                    id="hosting-small"
                                                    name="hosting"
                                                    value="hosting-small"
                                                    onClick={() => setNumberOfPages(1)}
                                                    className="hidden peer"
                                                    required
                                                />
                                                <label
                                                    htmlFor="hosting-small"
                                                    className="inline-flex items-center justify-center w-full p-4 text-gray-910 bg-transparent border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                >
                                                    <div className="block text-sm font-medium">
                                                        1
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="radio"
                                                    id="hosting-medium"
                                                    name="hosting"
                                                    value="hosting-medium"
                                                    className="hidden peer"
                                                    onClick={() => setNumberOfPages(5)}
                                                    required
                                                />
                                                <label
                                                    htmlFor="hosting-medium"
                                                    className="inline-flex items-center justify-center w-full p-4 text-gray-910 bg-transparent border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                >
                                                    <div className="block text-sm font-medium">
                                                        5
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="radio"
                                                    id="hosting-large"
                                                    name="hosting"
                                                    value="hosting-large"
                                                    className="hidden peer"
                                                    onClick={() => setNumberOfPages(10)}
                                                    required
                                                />
                                                <label
                                                    htmlFor="hosting-large"
                                                    className="inline-flex items-center justify-center w-full p-4 text-gray-910 bg-transparent border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                >
                                                    <div className="block text-sm font-medium">
                                                        10
                                                    </div>
                                                </label>
                                            </li>
                                            <li>
                                                <input
                                                    type="radio"
                                                    id="hosting-extra-large"
                                                    name="hosting"
                                                    value="hosting-extra-large"
                                                    onClick={() => setNumberOfPages(11)}
                                                    className="hidden peer"
                                                    required
                                                />
                                                <label
                                                    htmlFor="hosting-extra-large"
                                                    className="inline-flex items-center justify-center w-full p-4 text-gray-910 bg-transparent border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700"
                                                >
                                                    <div className="block text-sm font-medium">
                                                        10+
                                                    </div>
                                                </label>
                                            </li>

                                        </ul>

                                        <div className='flex'>
                                            <input type="checkbox" id="accept-payments" value="" className="hidden peer" />
                                            <label htmlFor="accept-payments" className="flex items-center justify-center w-full p-4 text-gray-910 bg-transparent border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                                {/* <svg className="text-red-600 w-5 h-5" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" /></svg> */}
                                                <div className="block text-sm font-medium">Accept payments</div>
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            <input type="checkbox" id="list-products" value="" className="hidden peer" />
                                            <label htmlFor="list-products" className="flex items-center justify-center w-full p-4 text-gray-910 bg-transparent border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                                {/* <svg className="text-red-600 w-5 h-5" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" /></svg> */}
                                                <div className="block text-sm font-medium">List products / properties</div>
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            <input type="checkbox" id="blog-section" value="" className="hidden peer" />
                                            <label htmlFor="blog-section" className="flex items-center justify-center w-full p-4 text-gray-910 bg-transparent border border-gray-200 rounded-lg cursor-pointer dark:hover:text-gray-300 dark:border-gray-700 dark:peer-checked:text-blue-500 peer-checked:border-blue-600 peer-checked:text-blue-600 hover:text-gray-600 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-700">
                                                {/* <svg className="text-red-600 w-5 h-5" fill="currentColor" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path d="M185.7 268.1h76.2l-38.1-91.6-38.1 91.6zM223.8 32L16 106.4l31.8 275.7 176 97.9 176-97.9 31.8-275.7zM354 373.8h-48.6l-26.2-65.4H168.6l-26.2 65.4H93.7L223.8 81.5z" /></svg> */}
                                                <div className="block text-sm font-medium">Blog section</div>
                                            </label>
                                        </div>
                                        <div className='flex'>
                                            <button
                                                className="grow inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                                onClick={calculateEstimate}
                                            >
                                                <span className="grow px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    Get estimate
                                                </span>
                                            </button>
                                        </div>

                                    </form>
                                </>
                            )}

                            {estimate.developerHours > 0 && estimate.hourlyRate > 0 && (
                                <>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Your Quote</h2>
                                    <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                        <thead className="text-xs text-white uppercase bg-gradient-to-br from-purple-600 to-blue-500 dark:bg-blue-500">
                                            <tr>
                                                <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                    Service
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Provider
                                                </th>
                                                <th scope="col" className="px-6 py-3">
                                                    Qty
                                                </th>
                                                <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                    Price
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            <tr className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Design
                                                </th>
                                                <td className="px-6 py-4 flex justify-start items-center gap-3">
                                                    Bonnie
                                                    <img className="w-10 h-10 rounded-full object-cover shrink-0" src="/images/profile.png" alt="Jese image" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    {estimate.designerHours} hours
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${estimate.designerCost}
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Development
                                                </th>
                                                <td className="px-6 py-4 flex justify-start items-center gap-3">
                                                    Roger
                                                    <img className="w-10 h-10 rounded-full object-cover shrink-0" src="/images/profile2.jpeg" alt="Jese image" />
                                                </td>
                                                <td className="px-6 py-4">
                                                    {estimate.developerHours} hours
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${estimate.developmentCost}
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Hosting
                                                </th>
                                                <td className="px-6 py-4">
                                                    Vercel
                                                </td>
                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${estimate.hostingCost}
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-gray-800">
                                                <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                    Headless CMS
                                                </th>
                                                <td className="px-6 py-4">
                                                    Sanity.io
                                                </td>
                                                <td className="px-6 py-4">
                                                    1
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${estimate.cdnCost}
                                                </td>
                                            </tr>
                                            <tr className="bg-white dark:bg-gray-800 text-purple-600">
                                                <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                    Our Fee
                                                </th>
                                                <td className="px-6 py-4">
                                                    Reverie
                                                </td>
                                                <td className="px-6 py-4">
                                                    10%
                                                </td>
                                                <td className="px-6 py-4">
                                                    ${estimate.ourFee}
                                                </td>
                                            </tr>
                                        </tbody>
                                        <tfoot>
                                            <tr className="font-semibold text-gray-900 dark:text-white">
                                                <th scope="row" className="px-6 py-3 text-base">Total</th>
                                                <td className="px-6 py-3"></td>
                                                <td className="px-6 py-3"></td>
                                                <td className="px-6 py-3">${estimate.totalEstimate}</td>
                                            </tr>
                                        </tfoot>
                                    </table>
                                </>
                            )}
                        </div>
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our mission</h2>
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>100% transparency for both you and contractors</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Regulate quality-standards of your new website</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Give you 2023 website technology</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Give you your dollar's worth</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Compensate contractors fairly</span>
                                </li>
                            </ul>
                        </div>
                        <img className="w-full rounded" src="/images/mission.png" alt="dashboard image" />
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="grid grid-cols-1 gap-4 mt-8">
                            <div className="relative overflow-x-auto">
                                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                                    <thead className="text-xs text-white uppercase bg-gradient-to-br from-purple-600 to-blue-500 dark:bg-blue-500">
                                        <tr>
                                            <th scope="col" className="px-6 py-3 rounded-l-lg">
                                                Service
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Provider
                                            </th>
                                            <th scope="col" className="px-6 py-3">
                                                Qty
                                            </th>
                                            <th scope="col" className="px-6 py-3 rounded-r-lg">
                                                Price
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Design
                                            </th>
                                            <td className="px-6 py-4 flex justify-start items-center gap-3">
                                                Bonnie
                                                <img className="w-10 h-10 rounded-full object-cover shrink-0" src="/images/profile.png" alt="Jese image" />
                                            </td>
                                            <td className="px-6 py-4">
                                                25 hours
                                            </td>
                                            <td className="px-6 py-4">
                                                $750
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Development
                                            </th>
                                            <td className="px-6 py-4 flex justify-start items-center gap-3">
                                                Roger
                                                <img className="w-10 h-10 rounded-full object-cover shrink-0" src="/images/profile2.jpeg" alt="Jese image" />
                                            </td>
                                            <td className="px-6 py-4">
                                                50 hours
                                            </td>
                                            <td className="px-6 py-4">
                                                $2500
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Hosting
                                            </th>
                                            <td className="px-6 py-4">
                                                Vercel
                                            </td>
                                            <td className="px-6 py-4">
                                                1
                                            </td>
                                            <td className="px-6 py-4">
                                                $100
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800">
                                            <th scope="row" className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                                                Headless CMS
                                            </th>
                                            <td className="px-6 py-4">
                                                Sanity.io
                                            </td>
                                            <td className="px-6 py-4">
                                                1
                                            </td>
                                            <td className="px-6 py-4">
                                                $50
                                            </td>
                                        </tr>
                                        <tr className="bg-white dark:bg-gray-800 text-purple-600">
                                            <th scope="row" className="px-6 py-4 font-medium whitespace-nowrap">
                                                Our Fee
                                            </th>
                                            <td className="px-6 py-4">
                                                Reverie
                                            </td>
                                            <td className="px-6 py-4">
                                                10%
                                            </td>
                                            <td className="px-6 py-4">
                                                $340
                                            </td>
                                        </tr>
                                    </tbody>
                                    <tfoot>
                                        <tr className="font-semibold text-gray-900 dark:text-white">
                                            <th scope="row" className="px-6 py-3 text-base">Total</th>
                                            <td className="px-6 py-3"></td>
                                            <td className="px-6 py-3"></td>
                                            <td className="px-6 py-3">$3740</td>
                                        </tr>
                                    </tfoot>
                                </table>

                            </div>
                        </div>
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How it works</h2>
                            <ol className="list-decimal list-inside">
                                <li>You get a 100% transparent cost breakdown</li>
                                <li>We vet and manage professional contractors for you</li>
                                <li>We check their work to ensure that it meets technical quality standards</li>
                                <li>You get the site you paid for</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our story</h2>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">Our founder has been a contractor and grew frustrated with seeing agencies charge 100% markups for bringing the client in the door, meaning you pay 2X for your website. Another pain point was seeing outdated technology being used for no justified reason other than being complacent in old ways and not understanding the benefits of using today's technology. <br></br><br></br>The web development business is still in the wild west era and it's time to set quality standards and make the prices fair.</p>
                        </div>
                        <img className="w-full rounded" src="/images/scroll.png" alt="dashboard image" />
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-8 items-center py-8 px-4 mx-auto max-w-screen-xl xl:gap-16 md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <img className="w-full rounded" src="/images/receipt.png" alt="dashboard image" />
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why choose us</h2>
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>We don't add unfair markups to prices</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>We pay our contractors fairly (transparent rates displayed)</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>We only use modern technology, no compromises</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>We value both you and contractors</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>We don't compromise on code quality</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>We don't compromise on design</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">For You</h2>
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Create websites that load fast</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Create websites that rank in Google</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Get fair and competitive pricing, ensuring you receive the best value</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">For Developers and Designers</h2>
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Join us for opportunities to work with modern technology</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Enjoy transparent rates and fair compensation for your expertise</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-green-500 dark:text-green-400"
                                        aria-hidden="true"
                                        xmlns="http://www.w3.org/2000/svg"
                                        fill="none"
                                        viewBox="0 0 16 12"
                                    >
                                        <path
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            d="M1 5.917 5.724 10.5 15 1.5"
                                        />
                                    </svg>
                                    <span>Asynchronous communication, we respect your time</span>
                                </li>
                            </ul>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                        </div>
                    </div>
                </section>

                <section id="free-guide" className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <div className="mb-8 lg:mb-16">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Free guide</h2>
                            <p className="text-gray-500 sm:text-xl dark:text-gray-400 text-center">How do I get a good quality website for a market price</p>
                        </div>
                        <div className="space-y-8 md:grid md:grid-cols-2 lg:grid-cols-3 md:gap-12 md:space-y-0">
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M3 3a1 1 0 000 2v8a2 2 0 002 2h2.586l-1.293 1.293a1 1 0 101.414 1.414L10 15.414l2.293 2.293a1 1 0 001.414-1.414L12.414 15H15a2 2 0 002-2V5a1 1 0 100-2H3zm11.707 4.707a1 1 0 00-1.414-1.414L10 9.586 8.707 8.293a1 1 0 00-1.414 0l-2 2a1 1 0 101.414 1.414L8 10.414l1.293 1.293a1 1 0 001.414 0l4-4z" clipRule="evenodd"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">How do I not get ripped off / overcharged?</h3>
                                <p className="text-gray-500 dark:text-gray-400">Find out exactly how much you're paying for each development stage and compare that to the market rates. We haven't seen that yet, that's why we launched Reverie.</p>
                                <h4 className='text-gray-500 dark:text-gray-400 font-bold mt-2'>Ans: Use us</h4>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M10.394 2.08a1 1 0 00-.788 0l-7 3a1 1 0 000 1.84L5.25 8.051a.999.999 0 01.356-.257l4-1.714a1 1 0 11.788 1.838L7.667 9.088l1.94.831a1 1 0 00.787 0l7-3a1 1 0 000-1.838l-7-3zM3.31 9.397L5 10.12v4.102a8.969 8.969 0 00-1.05-.174 1 1 0 01-.89-.89 11.115 11.115 0 01.25-3.762zM9.3 16.573A9.026 9.026 0 007 14.935v-3.957l1.818.78a3 3 0 002.364 0l5.508-2.361a11.026 11.026 0 01.25 3.762 1 1 0 01-.89.89 8.968 8.968 0 00-5.35 2.524 1 1 0 01-1.4 0zM6 18a1 1 0 001-1v-2.065a8.935 8.935 0 00-2-.712V17a1 1 0 001 1z"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">What’s the best web development agency?</h3>
                                <p className="text-gray-500 dark:text-gray-400">They all say they're the best though, including us. Go figure. So to make the choice easier we'll make sure you get a quality website for a market price.</p>
                                <p className='text-gray-500 dark:text-gray-400 font-bold mt-2'>Ans: None</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M6 6V5a3 3 0 013-3h2a3 3 0 013 3v1h2a2 2 0 012 2v3.57A22.952 22.952 0 0110 13a22.95 22.95 0 01-8-1.43V8a2 2 0 012-2h2zm2-1a1 1 0 011-1h2a1 1 0 011 1v1H8V5zm1 5a1 1 0 011-1h.01a1 1 0 110 2H10a1 1 0 01-1-1z" clipRule="evenodd"></path><path d="M2 13.692V16a2 2 0 002 2h12a2 2 0 002-2v-2.308A24.974 24.974 0 0110 15c-2.796 0-5.487-.46-8-1.308z"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">What’s the best technology to build my business website?</h3>
                                <h4 className='text-gray-500 dark:text-gray-400 font-bold'>Good website ranking in Google</h4>
                                <ul className='text-gray-500 dark:text-gray-400 list-disc'>
                                    <li>
                                        Next.js
                                    </li>
                                    <li>
                                        Headless Content Management System (Sanity.io).
                                    </li>
                                    <li>
                                        Vercel hosting + Content Delivery Network
                                    </li>
                                    <li>
                                        Fear not, it's super easy to use after we set it up for you.
                                    </li>
                                </ul>
                                <h4 className='text-gray-500 dark:text-gray-400 font-bold'>Simple business card site</h4>
                                <ul className='text-gray-500 dark:text-gray-400 list-disc'>
                                    <li>
                                        Use a website builder or Wordpress.
                                    </li>
                                </ul>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path><path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" clipRule="evenodd"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">What’s the cheapest way to build a website?</h3>
                                <p className="text-gray-500 dark:text-gray-400">You can do it yourself using a website builder or Wordpress but consider the quality of the website you're able to produce and the impression you'll make on your customers with a one size fits all design.</p>
                                <p className='text-gray-500 dark:text-gray-400 font-bold mt-2'>Ans: Use a professional service</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path d="M7 3a1 1 0 000 2h6a1 1 0 100-2H7zM4 7a1 1 0 011-1h10a1 1 0 110 2H5a1 1 0 01-1-1zM2 11a2 2 0 012-2h12a2 2 0 012 2v4a2 2 0 01-2 2H4a2 2 0 01-2-2v-4z"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">How to pick a web development agency?</h3>
                                <p className="text-gray-500 dark:text-gray-400">Get quotes from at least 3 web development agencies, check the technology they're going to use. Or we can do all of that for you and tell you exactly how much we charge for this service.</p>
                                <p className='text-gray-500 dark:text-gray-400 font-bold mt-2'>Ans: Vet professionals or let us vet for you</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">Should I get a Wordpress website in 2023?</h3>
                                <p className="text-gray-500 dark:text-gray-400">No, you really shouldn't unless you just want an online business card and spend a lot of time and money maintaining it.</p>
                                <p className='text-gray-500 dark:text-gray-400 font-bold mt-2'>Ans: No</p>
                            </div>
                            <div>
                                <div className="flex justify-center items-center mb-4 w-10 h-10 rounded-full bg-primary-100 lg:h-12 lg:w-12 dark:bg-primary-900">
                                    <svg className="w-5 h-5 text-primary-600 lg:w-6 lg:h-6 dark:text-white" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd"></path></svg>
                                </div>
                                <h3 className="mb-2 text-xl font-bold dark:text-white">I'm not worried about code quality, nobody will see it anyway, right?</h3>
                                <p className="text-gray-500 dark:text-gray-400">You're kind of right, neither you nor your customer will but Google will notice milliseconds of slower loading times, pushing your website down in search results, so <span className='font-bold'>less clients</span> for you. When you need to maintain your website it will take developers longer meaning they will <span className='font-bold'>charge you more</span>. Finally, Wordpress is the no.1 target for hackers. In your first week after lauch your website admin panel will receive hundreds of login attempts from strangers as well as comments from scammers asking you to click on dodgy website links, <span className='font-bold'>costing you time</span> to protect against.</p>
                                <p className='text-gray-500 dark:text-gray-400 font-bold mt-2'>Ans: It will cost you time, money and clients</p>
                            </div>
                        </div>
                    </div>
                </section>

            </main >
        </>
    );
}
