"use client"

import React from 'react';
import ThemeToggle from './ThemeToggle';
import Link from 'next/link';
import StickyMenuCTA from './StickyMenuCTA';

const Navigation: React.FC<any> = () => {
    return (
        <nav className="bg-transparent fixed w-full z-10 top-0 left-0 ">
            {/* <Link href='/contact?source=web-development' scroll={false}>
                <div className='hover:cursor-pointer w-full flex justify-center items-center text-white bg-purple-600 p-1 text-center'>
                    Are you looking for a fast and beautiful website? Start now
                </div>
            </Link> */}
            <div className="max-w-screen-2xl flex flex-wrap flex-row-reverse lg:flex-row justify-between items-center lg:justify-end mx-auto px-4 py-1 relative bg-white dark:bg-gray-900 !bg-opacity-80">
                {/* <a href="#" className="flex items-top text-base font-light text-gray-500/100 dark:text-gray-400/100 tracking-wider">
                        <p className="text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">Reverie</p>
                    </a> */}
                <div className="flex gap-2 items-center">
                    <ThemeToggle />
                    <Link href='/contact?source=web-development' scroll={false}>
                        <StickyMenuCTA />
                    </Link>
                </div>
                <div className="items-center justify-center w-fit md:flex md:order-1 lg:absolute lg:mx-auto lg:left-0 lg:right-0" id="navbar-sticky">
                    <ul className="grow px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0">
                        <li>
                            <Link href="/" className="flex items-top text-base font-light text-gray-500/100 dark:text-gray-400/100 tracking-wider">
                                <p className="text-base tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">reverie zero</p>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default Navigation;
