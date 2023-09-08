"use client"

import React, { useState } from 'react';
import Home from './page';
import ContactModal from '../components/ContactModal';
import Navigation from '../components/Navigation';
import Link from 'next/link';

const Client: React.FC<any> = ({ children }: any) => {
    const [isOpen, setIsOpen] = useState(false);

    const closeModal = () => {
        setIsOpen(false);
        console.log('close modal');
    };

    const openModal = () => {
        setIsOpen(true);
        console.log('open modal');
    };

    return (
        <>
            <Navigation openModal={openModal} />
            {children}
            <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a href="#" className='text-sm tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white'>Reverie Zero</a>
                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0 dark:text-gray-400">
                            <li>
                                <a href="#free-guide" className="mr-4 hover:underline md:mr-6">Free Guide</a>
                            </li>
                            <li>
                                <button onClick={openModal} className="mr-4 hover:underline md:mr-6 ">Start</button>
                            </li>
                        </ul>
                    </div>
                    <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <Link href="/" className="hover:underline">Reverie Zero</Link></span>
                </div>
            </footer>
            <ContactModal isOpen={isOpen} closeModal={closeModal} openModal={openModal} />
        </>
    );
};

export default Client;
