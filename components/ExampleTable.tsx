import React from 'react';
import Image from "next/image";

const ExampleTable = () => {
    return (
        <table className="w-full text-base text-center text-gray-500 dark:text-gray-400">
            <thead className="text-xs text-white uppercase bg-purple-600">
                <tr>
                    <th scope="col" className="px-5 py-3 rounded-l-lg">
                        Provider
                    </th>
                    <th scope="col" className="px-5 py-3">
                        Service
                    </th>
                    <th scope="col" className="px-5 py-3">
                        Qty
                    </th>
                    <th scope="col" className="px-5 py-3 rounded-r-lg">
                        Price
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-start items-center gap-3">
                        <div className="relative">
                            <Image
                                src="/images/profile.png"
                                alt="Jese image"
                                className="rounded-full w-10 h-10 object-cover"
                                width={40}
                                height={40}
                            />
                        </div>
                        {/* Bonnie */}
                    </th>
                    <td className="px-5 py-4">
                        Design
                    </td>
                    <td className="px-5 py-4">
                        25 hours
                    </td>
                    <td className="px-5 py-4">
                        $750
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-start items-center gap-3">
                        <div className="relative">
                            <Image
                                src="/images/profile2.jpeg"
                                alt="Jese image"
                                className="rounded-full w-10 h-10 object-cover"
                                width={40}
                                height={40}
                            />
                        </div>
                        {/* Roger */}
                    </th>
                    <td className="px-5 py-4">
                        Dev
                    </td>
                    <td className="px-5 py-4">
                        50 hours
                    </td>
                    <td className="px-5 py-4">
                        $2500
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-start items-center gap-3">
                        <div className="relative">
                            <Image
                                src="/images/logos/vercel-favicon.ico"
                                alt="Jese image"
                                className="rounded-full w-10 h-10 object-cover"
                                width={40}
                                height={40}
                            />
                        </div>
                        {/* Vercel */}
                    </th>
                    <td className="px-5 py-4">
                        Hosting
                    </td>
                    <td className="px-5 py-4">
                        1
                    </td>
                    <td className="px-5 py-4">
                        $100
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-start items-center gap-3">
                        <div className="relative">
                            <Image
                                src="/images/logos/sanity-logo.webp"
                                alt="Jese image"
                                className="rounded-full w-10 h-10 object-cover"
                                width={40}
                                height={40}
                            />
                        </div>
                        {/* Sanity */}
                    </th>
                    <td className="px-5 py-4">
                        Headless CMS
                    </td>
                    <td className="px-5 py-4">
                        1
                    </td>
                    <td className="px-5 py-4">
                        $50
                    </td>
                </tr>
                <tr className="bg-white dark:bg-gray-800">
                    <th scope="row" className="px-5 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white flex justify-start items-center gap-3">
                        <div className="w-10 h-10 rounded-full object-cover shrink-0 flex items-center justify-center text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">RZ</div>
                        {/* Reverie<br></br>Zero */}
                    </th>
                    <td className="px-5 py-4">
                        Quality Control & Management
                    </td>
                    <td className="px-5 py-4">
                        30%
                    </td>
                    <td className="px-5 py-4">
                        $1422
                    </td>
                </tr>
            </tbody>
            <tfoot>
                <tr className="font-semibold text-gray-900 dark:text-white">
                    <th scope="row" className="px-5 py-3 text-base">Total</th>
                    <td className="px-5 py-3"></td>
                    <td className="px-5 py-3"></td>
                    <td className="px-5 py-3">$6162</td>
                </tr>
            </tfoot>
        </table>
    );
};

export default ExampleTable;
