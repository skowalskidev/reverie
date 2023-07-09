"use client";

import React, { useEffect, useState } from 'react';
import Image from 'next/image'

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
            <div className="fixed w-full top-4 z-10 px-4 flex justify-between">
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
            </div>

            <main className='mx-auto max-w-screen-lg'>
                <section className="bg-white dark:bg-gray-900 mt-28 flex items-end">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12 grow items-center">
                        <div className="mr-auto place-self-center lg:col-span-7 flex flex-col gap-4">
                            <div className='h-[300px] relative overflow-hidden rounded'>
                                <Image
                                    src="/images/hero.png"
                                    width={500}
                                    height={500}
                                    className='object-cover object-top w-full h-full'
                                    alt="Picture of the author"
                                />
                            </div>
                            <h1 className=" items-center text-5xl font-extrabold text-gray-900 dark:text-white">100% <mark className="px-2 text-white dark:text-gray-900 bg-gradient-to-br from-purple-600 to-blue-500 rounded dark:bg-blue-500">transparent</mark>  <br></br>web development</h1>

                            <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">Websites at fair prices</p>
                        </div>
                        <div className="lg:mt-0 lg:col-span-5 flex flex-col">
                            {!(estimate.developerHours > 0 && estimate.hourlyRate > 0) && (
                                <>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Get a quick estimate</h2>
                                    <form onSubmit={(e) => e.preventDefault()} className='flex flex-col gap-3'>

                                        <h3 className="text-lg font-medium text-gray-900 dark:text-white">How many pages?</h3>
                                        <ul className="grid w-full gap-6 md:grid-cols-4">
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

                                        {/* <label htmlFor="numberOfPages" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Number of Pages</label>
                                        <input
                                            type="text"
                                            inputMode="numeric"
                                            id="numberOfPages"
                                            value={numberOfPages}
                                            onChange={handleNumberOfPagesChange}
                                            onKeyPress={(e) => {
                                                const onlyNumbers = /^[0-9\b]+$/;
                                                if (!onlyNumbers.test(e.key)) {
                                                    e.preventDefault();
                                                }
                                            }}
                                            className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-transparent dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                                            placeholder="Number of Pages"
                                        /> */}

                                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                            <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="bordered-checkbox-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Accept payments</label>
                                        </div>
                                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                            <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="bordered-checkbox-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">List products / properties</label>
                                        </div>
                                        <div className="flex items-center pl-4 border border-gray-200 rounded dark:border-gray-700">
                                            <input id="bordered-checkbox-1" type="checkbox" value="" name="bordered-checkbox" className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" />
                                            <label htmlFor="bordered-checkbox-1" className="w-full py-4 ml-2 text-sm font-medium text-gray-900 dark:text-gray-300">Blog section</label>
                                        </div>
                                        <div className='flex'>
                                            <button
                                                className="grow inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                                onClick={calculateEstimate}
                                            >
                                                <span className="grow px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                                    Get Estimate
                                                </span>
                                            </button>
                                        </div>
                                    </form>
                                </>
                            )}

                            {estimate.developerHours > 0 && estimate.hourlyRate > 0 && (
                                <>
                                    <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Your Quote</h2>
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
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our Mission</h2>
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
                                    <span>Bring 100% transparency to both clients and contractors</span>
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
                                    <span>Give clients 2023 website technology</span>
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
                                    <span>Give clients their dollar's worth</span>
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
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How It Works</h2>
                            <ol className="list-decimal list-inside">
                                <li>You get a 100% transparent cost breakdown</li>
                                <li>We vet and manage professional contractors for you</li>
                                <li>We check their work to ensure that it meets technical quality standards</li>
                                <li>You get the site you paid for</li>
                            </ol>
                        </div>
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
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why are we doing this?</h2>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">Our founder has been a contractor and grew frustrated with seeing agencies charge 100% markups for bringing the client in the door, meaning you pay 2X for your webite. Another pain point was seeing outdated technology being used for no justified reason other than refusing to spend time learning modern technology and not understanding the benefits of using today's technology. This industry is like the wild west and it's time to set quality standards and make the prices fair.</p>
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
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why Choose Us</h2>
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
                                    <span>We value both clients and contractors</span>
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
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">For Clients</h2>
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
            </main >
        </>
    );
}
