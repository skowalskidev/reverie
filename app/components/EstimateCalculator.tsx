import React, { useState } from 'react';
import Image from 'next/image';

const EstimateCalculator: React.FC = () => {
    const [numberOfPages, setNumberOfPages] = useState(1);

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

    return (
        <>
            {
                !(estimate.developerHours > 0 && estimate.hourlyRate > 0) && (
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
                                    className="grow inline-flex items-center justify-center p-0.5 mb-2 mr-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-purple-600 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800"
                                    onClick={calculateEstimate}
                                >
                                    <span className="grow px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
                                        Get estimate
                                    </span>
                                </button>
                            </div>

                        </form>
                    </>
                )
            }

            {
                estimate.developerHours > 0 && estimate.hourlyRate > 0 && (
                    <>
                        <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-center">Your Quote</h2>
                        <table className="w-full text-sm text-center text-gray-500 dark:text-gray-400">
                            <thead className="text-xs text-white uppercase bg-purple-600">
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
                                        <div className="relative w-10 h-10">
                                            <Image
                                                src="/images/profile.png"
                                                alt="Jese image"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-full"
                                            />
                                        </div>
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
                                        <div className="relative w-10 h-10">
                                            <Image
                                                src="/images/profile2.jpeg"
                                                alt="Jese image"
                                                layout="fill"
                                                objectFit="cover"
                                                className="rounded-full"
                                            />
                                        </div>
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
                )
            }
        </>
    );
};

export default EstimateCalculator;