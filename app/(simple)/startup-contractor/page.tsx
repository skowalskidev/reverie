import React from 'react';
import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheck } from '@fortawesome/free-solid-svg-icons';
import Link from 'next/link';
import Button from '@/components/Button';
import AMA from '@/components/AMA';

export const metadata = {
    title: 'Subscription Management',
    description: 'Keep track of all subscriptions and invoices for expense accounting',
}

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <section className="flex flex-col gap-4 items-center bg-white dark:bg-gray-900 text-center p-6">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white relative">Simon<br></br> [startup-contractor]</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">I&apos;m easy to work with and I get the job done!</p>
                <Link href='/contact' scroll={false}>
                    <Button>
                        Contact
                    </Button>
                </Link>
            </section>
            <section className="bg-white dark:bg-gray-900 text-center p-6 flex flex-col gap-8">
                <AMA />
            </section>
            <section className="bg-white dark:bg-gray-900 text-center p-6 flex flex-col lg:flex-row gap-8 items-center">
                <div className='flex-1'>
                    <div className='relative lg:w-44 lg:h-44 w-44 h-44'>
                        <Image
                            src="/images/profile.jpeg"
                            alt="Jese image"
                            className="rounded-full"
                            fill
                            sizes='(min-width: 1024px) 240px, 100vw'
                            priority
                        />
                    </div>
                </div>

                <div className='flex-1 flex flex-col'>
                    <div className='flex'>
                        <div className='flex flex-wrap gap-4'>
                            <span className="bg-pink-100 text-pink-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">Next.js</span>
                            <span className="bg-blue-100 text-blue-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-blue-400 border border-blue-400">React.js</span>
                            <span className="bg-green-100 text-green-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-green-400 border border-green-400">Vue.js</span>
                            <span className="bg-purple-100 text-purple-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-purple-400 border border-purple-400">Vuex</span>
                            <span className="bg-orange-100 text-orange-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-orange-400 border border-orange-400">TypeScript</span>
                            <span className="bg-red-100 text-red-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-red-400 border border-red-400">JavaScript</span>
                            <span className="bg-teal-100 text-teal-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-teal-400 border border-teal-400">Tailwind CSS</span>
                            <span className="bg-yellow-100 text-yellow-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-yellow-400 border border-yellow-400">Java</span>
                            <span className="bg-indigo-100 text-indigo-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-indigo-400 border border-indigo-400">Figma</span>
                            <span className="bg-cyan-100 text-cyan-800 text-xs font-medium px-2.5 py-1 rounded dark:bg-gray-700 dark:text-cyan-400 border border-cyan-400">SQL</span>
                        </div>

                    </div>
                </div>
                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                    <li className="flex-1 flex items-center space-x-3">
                        <span className="w-4 text-purple-600">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span>B2B External Contractor</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="w-4 text-purple-600">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span>Websites</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="w-4 text-purple-600">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span>Admin dashboards</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="w-4 text-purple-600">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span>APIs</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="w-4 text-purple-600">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span>Web Apps</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="w-4 text-purple-600">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span>Professional & Friendly service</span>
                    </li>
                    <li className="flex items-center space-x-3">
                        <span className="w-4 text-purple-600">
                            <FontAwesomeIcon icon={faCheck} />
                        </span>
                        <span>Business goal oriented development</span>
                    </li>
                </ul>

            </section>

            <section className="bg-white dark:bg-gray-900 text-center p-6 flex flex-col">
                <h2 className="mb-2 text-lg font-semibold text-gray-900 dark:text-white">Not sure whether I suit your needs? Hire me anyway, I&apos;ve got you covered.</h2>
                <Link href='/contact' scroll={false}>
                    <Button>
                        Contact
                    </Button>
                </Link>
            </section>
        </div>
    );
}
