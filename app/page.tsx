import React from 'react';
import ToolLink from '../components/ToolLink';
import ThemeToggle from '../components/ThemeToggle';
import Link from 'next/link';
import Button from '../components/Button';

export const metadata = {
    title: 'Reverie Zero',
    description: 'A collection of tools made by myself for myself with the hopes of helping others',
}

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
                                <a href="#" className="flex items-top text-sm font-light text-gray-500/100 dark:text-gray-400/100 tracking-wider">
                                    <p className="text-sm tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">Reverie Zero</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main className='mx-auto max-w-screen-lg'>
                <section className="bg-white dark:bg-gray-900 mt-28 text-center p-6">
                    <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">fast free <span className="text-purple-600 dark:text-purple-600">fun</span> easy</h1>
                    <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">A collection of tools made by myself for myself with the hopes of helping others</p>
                    <Link href='/contact' scroll={false}>
                        <Button>
                            Contact
                        </Button>
                    </Link>
                </section>

                <section className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
                    <ToolLink title='Subscription Management' alt='subscriptions symbol' imgSrc='/images/homepage/dollars.png' toolLinkHref='subscription-management' />
                    <ToolLink title='Web Development' alt='web development symbol' imgSrc='/images/homepage/room.png' toolLinkHref='web-development' label='*Service' />
                </section>

            </main >



            <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <a href="#" className="hover:underline">Reverie Zero</a></span>
                </div>
            </footer>
        </>
    );
}
