"use client";

import React, { useEffect, useState } from 'react';

export default function Home() {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const prefersDarkMode = window.matchMedia('(prefers-color-scheme: dark)').matches;
        const colorTheme = localStorage.getItem('color-theme');
        setIsDarkMode(colorTheme ? colorTheme === 'dark' : prefersDarkMode);
    }, []);

    const toggleTheme = () => {
        setIsDarkMode((prevMode) => !prevMode);
        const newTheme = isDarkMode ? 'light' : 'dark';
        localStorage.setItem('color-theme', newTheme);
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

    const [numberOfPages, setNumberOfPages] = useState(0);
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

    const handleNumberOfPagesChange = (event) => {
        setNumberOfPages(Number(event.target.value));
    };

    const handleWebsiteDescriptionChange = (event) => {
        setWebsiteDescription(event.target.value);
    };

    return (
        <>
            <div className="fixed top-4 right-4 z-10">
                <button
                    id="theme-toggle"
                    type="button"
                    className="text-gray-500 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-gray-700 focus:outline-none focus:ring-4 focus:ring-gray-200 dark:focus:ring-gray-700 rounded-lg text-sm p-2.5"
                    onClick={toggleTheme}
                >
                    <svg
                        id="theme-toggle-dark-icon"
                        className={`${isDarkMode ? 'w-5 h-5' : 'hidden w-5 h-5'}`}
                        fill="currentColor"
                        viewBox="0 0 20 20"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z"></path>
                    </svg>
                    <svg
                        id="theme-toggle-light-icon"
                        className={`${!isDarkMode ? 'w-5 h-5' : 'hidden w-5 h-5'}`}
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

            <main className={isDarkMode ? 'dark' : ''}>
                <section className="bg-white dark:bg-gray-900">
                    <div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-0 lg:py-16 lg:grid-cols-12">
                        <div className="mr-auto place-self-center lg:col-span-7">
                            <h1 className="max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none md:text-5xl xl:text-6xl text-gray-900 dark:text-white">100% transparent PRO web development</h1>
                            <p className="max-w-2xl mb-6 font-light text-gray-500 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-400">High quality websites at fair prices</p>
                        </div>
                        <div className="lg:mt-0 lg:col-span-5 flex flex-col">
                            <h2 className="text-2xl font-bold">Get an instant AI Quote</h2>
                            <form>
                                <label htmlFor="numberOfPages" className="block my-4">
                                    Number of Pages:
                                    <input
                                        type="number"
                                        id="numberOfPages"
                                        value={numberOfPages}
                                        onChange={handleNumberOfPagesChange}
                                        className="border border-gray-400 rounded px-2 py-1 text-black"
                                    />
                                </label>
                                <label htmlFor="websiteDescription" className="block my-4">
                                    Website Description:
                                    <textarea
                                        id="websiteDescription"
                                        value={websiteDescription}
                                        onChange={handleWebsiteDescriptionChange}
                                        className="border border-gray-400 rounded px-2 py-1 text-black"
                                    />
                                </label>
                                {/* Include relevant form fields for other project details */}
                                <button
                                    type="button"
                                    className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded"
                                    onClick={calculateEstimate}
                                >
                                    Get AI Estimate
                                </button>
                            </form>
                            {estimate.developerHours > 0 && estimate.hourlyRate > 0 && (
                                <div>
                                    <p>
                                        Developer Hours: {estimate.developerHours} hours
                                        <br />
                                        Developer Hourly Rate: ${estimate.hourlyRate}
                                        <br />
                                        Designer Hours: {estimate.designerHours} hours
                                        <br />
                                        Designer Hourly Rate: ${estimate.designerHourlyRate}
                                        <br />
                                        Development Cost: ${estimate.developmentCost}
                                        <br />
                                        Designer Cost: ${estimate.designerCost}
                                        <br />
                                        Hosting Cost: ${estimate.hostingCost}
                                        <br />
                                        CDN Cost: ${estimate.cdnCost}
                                        <br />
                                        <br />
                                        Our Fee (10%): ${estimate.ourFee}
                                        <br />
                                        Total Estimate: ${estimate.totalEstimate}
                                    </p>
                                </div>
                            )}
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">
                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How It Works</h2>
                            <ol className="list-decimal list-inside">
                                <li>Specify your requirements and project details</li>
                                <li>Approve the design proposal provided by our team</li>
                                <li>Development commences based on the approved design</li>
                            </ol>
                        </div>
                        <div className="grid grid-cols-2 gap-4 mt-8">
                            <img className="w-full rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-2.png" alt="office content 1" />
                            <img className="mt-4 w-full lg:mt-10 rounded-lg" src="https://flowbite.s3.amazonaws.com/blocks/marketing-ui/content/office-long-1.png" alt="office content 2" />
                        </div>
                    </div>
                </section>
                <section className='bg-white dark:bg-gray-900'>
                    <div className="gap-16 items-center py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                        <ol className="relative border-l border-gray-200 dark:border-gray-700">
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">2 months ago</time>
                                    <div className="text-sm font-normal text-gray-500 sm:text-base dark:text-gray-300">We receive your project details</div>
                                </div>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="/docs/images/people/profile-picture-5.jpg" alt="Thomas Lean image" />
                                </span>
                                <div className="p-4 bg-white border border-gray-200 rounded-lg shadow-sm dark:bg-gray-700 dark:border-gray-600">
                                    <div className="items-center justify-between mb-3 sm:flex">
                                        <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 month ago</time>
                                        <div className="text-sm font-normal text-gray-500 sm:text-base dark:text-gray-300">Approve the design proposal provided by the designer</div>
                                    </div>
                                    <div className="p-3 text-xs italic font-normal text-gray-500 border border-gray-200 rounded-lg bg-gray-50 dark:bg-gray-600 dark:border-gray-500 dark:text-gray-300">Hi ya'll! I wanted to share a webinar zeroheight is having regarding how to best measure your design system! This is the second session of our new webinar series on #DesignSystems discussions where we'll be speaking about Measurement.</div>
                                </div>
                            </li>
                            <li className="mb-10 ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="/docs/images/people/profile-picture-3.jpg" alt="Bonnie image" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 month ago</time>
                                    <div className="text-sm font-normal text-gray-500 sm:text-base dark:text-gray-300">Development commences based on the approved design</div>
                                </div>
                            </li>

                            <li className="ml-6">
                                <span className="absolute flex items-center justify-center w-6 h-6 bg-blue-100 rounded-full -left-3 ring-8 ring-white dark:ring-gray-900 dark:bg-blue-900">
                                    <img className="rounded-full shadow-lg" src="/docs/images/people/profile-picture-1.jpg" alt="Jese Leos image" />
                                </span>
                                <div className="items-center justify-between p-4 bg-white border border-gray-200 rounded-lg shadow-sm sm:flex dark:bg-gray-700 dark:border-gray-600">
                                    <time className="mb-1 text-xs font-normal text-gray-400 sm:order-last sm:mb-0">1 day ago</time>
                                    <div className="text-sm font-normal text-gray-500 sm:text-base dark:text-gray-300">Your website is <span className="font-semibold text-gray-900 dark:text-white">Online</span></div>
                                </div>
                            </li>
                        </ol>
                    </div>
                </section>
                <section className="my-12">
                    <h2 className="text-2xl font-bold">How It Works</h2>
                    <ol className="list-decimal list-inside">
                        <li>Specify your requirements and project details</li>
                        <li>Approve the design proposal provided by our team</li>
                        <li>Development commences based on the approved design</li>
                    </ol>
                </section>

                <section className="my-12">
                    <h2 className="text-2xl font-bold">Why Choose Us</h2>
                    <ul className="list-disc list-inside">
                        <li>No time wasted on lengthy phone calls</li>
                        <li>Efficient communication via messages to streamline operations</li>
                        <li>Reduced overhead costs allow us to pass on savings to our clients</li>
                        <li>Expertise and industry knowledge applied to deliver exceptional results</li>
                    </ul>
                </section>

                <section className="my-12">
                    <h2 className="text-2xl font-bold">For Clients</h2>
                    <ul className="list-disc list-inside">
                        <li>Create high-quality websites that leave a lasting impression</li>
                        <li>Benefit from our transparent rates with no hidden fees</li>
                        <li>Get fair and competitive pricing, ensuring you receive the best value</li>
                    </ul>
                </section>

                <section className="my-12">
                    <h2 className="text-2xl font-bold">For Developers and Designers</h2>
                    <ul className="list-disc list-inside">
                        <li>Join us for opportunities to work on top-notch projects</li>
                        <li>Fulfill your passion for delivering high-quality websites</li>
                        <li>Enjoy transparent rates and fair compensation for your expertise</li>
                        <li>Experience efficient communication and reduced overhead</li>
                    </ul>
                </section>
            </main>
        </>
    );
}
