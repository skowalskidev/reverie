"use client";

import React, { useEffect, useState, useRef, Fragment } from 'react';
import ExampleTable from './components/ExampleTable';
import DrippingColumn from './components/DrippingColumn';
import StickyMenuCTA from './components/StickyMenuCTA';
import Image from 'next/image';
import { Dialog, Transition } from '@headlessui/react'
import { useForm, ValidationError } from '@formspree/react';

function ContactForm() {
    const [state, handleSubmit] = useForm("xoqojrzb");
    if (state.succeeded) {
        return <p className='flex justify-center text-purple-600 text-center'>Thank you.<br></br><br></br> Your message has been sent, we&apos;ll get back to you as soon as we can :)</p>;
    }
    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" name='email' className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" placeholder="name@flowbite.com" required></input>
                <ValidationError
                    prefix="Email"
                    field="email"
                    errors={state.errors}
                />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500" placeholder="Leave a comment..."></textarea>
                <ValidationError
                    prefix="Message"
                    field="message"
                    errors={state.errors}
                />
            </div>
            <div className='flex justify-center'>
                <button type="submit" disabled={state.submitting} className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-purple-600 dark:focus:ring-primary-800">Send message</button>
            </div>
        </form>
    );
}

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

    const [websiteDescription, setWebsiteDescription] = useState('');

    const [heroSectionHeight, setHeroSectionHeight] = useState(0);

    useEffect(() => {
        const calculateHeroSectionHeight = () => {
            const heroSectionElement = document.getElementById('hero-section');
            if (heroSectionElement) {
                return heroSectionElement.getBoundingClientRect().height;
            }
            return 0;
        };

        const handleResize = () => {
            const height = calculateHeroSectionHeight();
            setHeroSectionHeight(height);
        };

        // Initial calculation
        const initialHeight = calculateHeroSectionHeight();
        setHeroSectionHeight(initialHeight);

        // Recalculate height on window resize
        window.addEventListener('resize', handleResize);
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    const mainRef = useRef(null);
    const [mainHeight, setMainHeight] = useState(0);

    useEffect(() => {
        if (mainRef.current) {
            // @ts-ignore
            const mainHeight = mainRef.current.clientHeight;
            setMainHeight(mainHeight);
        }
    }, []);

    let [isOpen, setIsOpen] = useState(false)

    function closeModal() {
        setIsOpen(false)
    }

    function openModal() {
        setIsOpen(true)
    }
    return (
        <>
            <nav className="bg-transparent fixed w-full z-10 top-0 left-0 ">
                <div className='w-full flex justify-center items-center text-white bg-purple-600 p-1 text-center'>
                    Offer: first 2 clients are eligible for 0% QC & Management fees, since Reverie just launched.
                </div>
                <div className="max-w-screen-2xl flex flex-wrap flex-row-reverse lg:flex-row justify-between items-center lg:justify-end mx-auto px-4 py-1 relative bg-white dark:bg-gray-900 !bg-opacity-80">
                    {/* <a href="#" className="flex items-top text-sm font-light text-gray-500/100 dark:text-gray-400/100 tracking-wider">
                        <p className="text-sm tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">Reverie</p>
                    </a> */}
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
                        <StickyMenuCTA alwaysShow heroSectionHeight={heroSectionHeight} onClick={openModal} />
                    </div>
                    <div className="items-center justify-center w-fit md:flex md:order-1 lg:absolute lg:mx-auto lg:left-0 lg:right-0" id="navbar-sticky">
                        <ul className="grow px-5 py-2.5 transition-all ease-in duration-75 bg-transparent rounded-md group-hover:bg-opacity-0">
                            <li>
                                <a href="#" className="flex items-top text-sm font-light text-gray-500/100 dark:text-gray-400/100 tracking-wider">
                                    <p className="text-sm tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white">Reverie</p>
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>

            <main ref={mainRef} className='mx-auto max-w-screen-lg'>
                <section className="hidden lg:flex absolute justify-center mx-auto left-0 right-0 pointer-events-none">
                    <div className='flex shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl dark:shadow-none dark:bg-gray-950'>
                        <DrippingColumn height={mainHeight} />
                        <DrippingColumn height={mainHeight} />
                        <DrippingColumn height={mainHeight} />
                        <DrippingColumn height={mainHeight} />
                        <DrippingColumn height={mainHeight} />
                        <DrippingColumn height={mainHeight} />
                    </div>
                </section>
                <section className="lg:hidden pointer-events-none">
                    <div className='absolute left-0 flex shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl dark:shadow-none dark:bg-gray-950'>
                        <DrippingColumn height={mainHeight} />
                    </div>
                    <div className='absolute right-0 flex shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl dark:shadow-none dark:bg-gray-950'>
                        <DrippingColumn height={mainHeight} />
                    </div>
                </section>
                <section className="bg-white dark:bg-gray-900 mt-28">
                    <div className="gap-4 lg:gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col lg:grid lg:grid-cols-2 lg:py-16 lg:px-6 text-center">
                        <div className="grid grid-cols-1 gap-4 mt-8">
                            <h1 className="items-center text-5xl leading-normal font-extrabold text-gray-900 dark:text-white">100% <mark className="px-2 text-white dark:text-gray-900 bg-gradient-to-br from-purple-600 to-blue-500 rounded dark:bg-blue-500">transparent</mark>  <br></br>web development</h1>

                            <p className="max-w-2xl font-light text-gray-500 md:text-lg lg:text-xl dark:text-gray-400">
                                Custom websites
                                <br></br>No hidden fees
                            </p>

                        </div>
                        <div className='px-4 w-[calc(100%+32px)] overflow-x-auto'>
                            <ExampleTable />
                        </div>
                    </div>
                </section>
                <section id="free-guide" className="bg-white dark:bg-gray-900">
                    <div className="py-8 px-4 mx-auto max-w-screen-xl sm:py-16 lg:px-6">
                        <div className="mb-8 lg:mb-16">
                            <h2 className="lg:hidden mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left">Free guide</h2>
                            <div className="hidden gap-4 lg:gap-32 items-center mx-auto max-w-screen-xl lg:grid lg:grid-cols-2">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-right">Free</h2>
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white text-left">guide</h2>
                            </div>
                        </div>
                        <div className="space-y-8 md:grid md:grid-cols-2 gap-4 lg:gap-32 md:space-y-0">
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 2a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1M2 5h12a1 1 0 0 1 1 1v8a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V6a1 1 0 0 1 1-1Zm8 5a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">How do I not get ripped off / overcharged?</h3>
                            </div>

                            <p className="text-gray-500 dark:text-gray-400">Find out exactly how much you&apos;re paying for each development stage and compare that to the market rates. We haven&apos;t seen that yet, that&apos;s why we launched Reverie.</p>
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 21 21">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="m6.072 10.072 2 2 6-4m3.586 4.314.9-.9a2 2 0 0 0 0-2.828l-.9-.9a2 2 0 0 1-.586-1.414V5.072a2 2 0 0 0-2-2H13.8a2 2 0 0 1-1.414-.586l-.9-.9a2 2 0 0 0-2.828 0l-.9.9a2 2 0 0 1-1.414.586H5.072a2 2 0 0 0-2 2v1.272a2 2 0 0 1-.586 1.414l-.9.9a2 2 0 0 0 0 2.828l.9.9a2 2 0 0 1 .586 1.414v1.272a2 2 0 0 0 2 2h1.272a2 2 0 0 1 1.414.586l.9.9a2 2 0 0 0 2.828 0l.9-.9a2 2 0 0 1 1.414-.586h1.272a2 2 0 0 0 2-2V13.8a2 2 0 0 1 .586-1.414Z" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">What’s the best web development agency?</h3>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">They all say they&apos;re the best though, including us. Go figure. So to make the choice easier we&apos;ll be 100% transparent with you.</p>
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" width="20" height="18" fill="none" viewBox="0 0 20 18">
                                    <path stroke="currentColor" strokeLinecap="round" strokeWidth="1" d="M1 7h18M4 4h.01M7 4h.01M10 4h.01M3 17h14a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2H3a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2Z" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">What’s the best technology to build my business website?</h3>
                            </div>
                            <div><h4 className='text-gray-500 dark:text-gray-400 font-bold'>Fast website ranking in Google</h4>
                                <ul className='text-gray-500 dark:text-gray-400 list-disc list-inside'>
                                    <li>
                                        Next.js
                                    </li>
                                    <li>
                                        Headless Content Management System (Sanity.io).
                                    </li>
                                    <li>
                                        Vercel hosting + Content Delivery Network
                                    </li>
                                </ul>
                                <p className='text-gray-500 dark:text-gray-400 mt-3'>Fear not, it&apos;s super easy to manage after we set it up for you.</p>
                            </div>
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 11 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M1.75 15.363a4.954 4.954 0 0 0 2.638 1.574c2.345.572 4.653-.434 5.155-2.247.502-1.813-1.313-3.79-3.657-4.364-2.344-.574-4.16-2.551-3.658-4.364.502-1.813 2.81-2.818 5.155-2.246A4.97 4.97 0 0 1 10 5.264M6 17.097v1.82m0-17.5v2.138" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">What’s the cheapest way to build a website?</h3>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">You can do it yourself using a website builder or Wordpress but consider the quality of the website you&apos;re able to produce and the impression you&apos;ll make on your customers with a one size fits all design.</p>
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 18 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 15a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm0 0h8m-8 0-1-4m9 4a2 2 0 1 0 0 4 2 2 0 0 0 0-4Zm-9-4h10l2-7H3m2 7L3 4m0 0-.792-3H1" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">How to pick a web development agency?</h3>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">Get quotes from at least 3 web development agencies, check the technology they&apos;re going to use. Or we can do all of that for you and tell you exactly how much we charge for this service.</p>
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 16 20">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M6 1v4a1 1 0 0 1-1 1H1m4 4 1 6 2-4 2 4 1-6m4-8v16a.97.97 0 0 1-.933 1H1.933A.97.97 0 0 1 1 18V5.828a2 2 0 0 1 .586-1.414l2.828-2.828A2 2 0 0 1 5.828 1h8.239A.97.97 0 0 1 15 2Z" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">Should I get a Wordpress website in 2023?</h3>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">No, you really shouldn&apos;t unless you just want an online business card and spend a lot of time and money maintaining it.</p>
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">Code quality, nobody will see it anyway, right?</h3>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">You&apos;re kind of right, neither you nor your customer will but Google will notice milliseconds of slower loading times, pushing your website down in search results, so <span className='font-bold'>less clients</span> will find you. When you need to maintain your website it will take developers longer meaning they will <span className='font-bold'>charge you more</span>. Finally, Wordpress is the no.1 target for hackers. In your first week after lauch your website admin panel will receive hundreds of login attempts from strangers as well as comments from scammers asking you to click on dodgy website links, <span className='font-bold'>costing you time</span> to protect against.</p>
                            <div className='flex gap-4'>
                                <svg className="shrink-0 w-10 h-10 text-purple-600" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 16">
                                    <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" d="M5 4 1 8l4 4m10-8 4 4-4 4M11 1 9 15" />
                                </svg>
                                <h3 className="text-xl font-bold dark:text-white">Do you outsource to white label sweatshop contractors?</h3>
                            </div>
                            <p className="text-gray-500 dark:text-gray-400">No. You get to see the names, faces and renumeration of every individual making your website.</p>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="flex flex-col-reverse lg:flex-col gap-4 lg:gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our mission</h2>
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                    <span>Give you your dollar&apos;s worth</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                        <div className='relative w-full lg:h-80 h-52'>
                            <Image
                                src="/images/mission.png"
                                alt="dashboard image"
                                fill
                                className='object-cover rounded'
                                sizes="100vw,(min-width: 1024px) 33vw"
                            ></Image>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="gap-4 lg:gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl flex flex-col lg:grid lg:grid-cols-2 lg:py-16 lg:px-6">

                        <div className='w-[calc(100%+32px)] px-4 lg:px-0 lg:w-full overflow-x-auto'>
                            <ExampleTable />
                        </div>

                        <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">How it works</h2>
                            <ol className="list-decimal list-inside marker:text-purple-600">
                                <li>You get a 100% transparent cost breakdown</li>
                                <li>See the names and faces of the people making your website</li>
                                <li>We vet and manage professional contractors for you</li>
                                <li>We check their work to ensure that it meets technical quality standards</li>
                                <li>You get the site you paid for</li>
                            </ol>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="flex flex-col-reverse lg:flex-col gap-4 lg:gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Our story</h2>
                            <p className="mb-4 text-gray-500 dark:text-gray-400">Our founder has been a contractor and grew frustrated with seeing agencies charge 100% markups for bringing the client in the door, meaning you pay 2X for your website. Another pain point was seeing outdated technology being used for no justified reason other than being complacent in old ways and not understanding the benefits of using today&apos;s technology. <br></br><br></br>The web development business is still in the wild west era and it&apos;s time to set quality standards and make the prices fair.</p>
                        </div>
                        <div className='relative w-full lg:h-80 h-52'>
                            <Image
                                src="/images/scroll.png"
                                alt="dashboard image"
                                fill
                                className='object-cover rounded'
                                sizes="100vw,(min-width: 1024px) 33vw"
                            ></Image>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="flex flex-col gap-4 lg:gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <div className='relative w-full lg:h-80 h-52'>
                            <Image
                                src="/images/receipt.png"
                                alt="dashboard image"
                                fill
                                className='object-cover rounded'
                                sizes="100vw,(min-width: 1024px) 33vw"
                            ></Image>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why choose us</h2>
                            <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                    <span>We don&apos;t add unfair markups to prices</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                    <span>We don&apos;t compromise on code quality</span>
                                </li>
                                <li className="flex items-center space-x-3">
                                    <svg
                                        className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                    <span>We don&apos;t compromise on design</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="flex flex-col-reverse lg:flex-col gap-4 lg:gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <div className="mt-4 md:mt-0">
                            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">For You</h2>
                                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center space-x-3">
                                        <svg
                                            className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                            className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                            className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                        </div>
                        <div className='relative w-full lg:h-80 h-52'>
                            <Image
                                src="/images/briefcase.png"
                                alt="dashboard image"
                                fill
                                className='object-cover rounded'
                                sizes="100vw,(min-width: 1024px) 33vw"
                            ></Image>
                        </div>
                    </div>
                </section>

                <section className="bg-white dark:bg-gray-900">
                    <div className="flex flex-col gap-4 lg:gap-32 items-center py-8 px-4 mx-auto max-w-screen-xl md:grid md:grid-cols-2 sm:py-16 lg:px-6">
                        <div className='relative w-full lg:h-80 h-52'>
                            <Image
                                src="/images/creator-symbol.png"
                                alt="dashboard image"
                                fill
                                className='object-cover rounded'
                                sizes="100vw,(min-width: 1024px) 33vw"
                            ></Image>
                        </div>
                        <div className="mt-4 md:mt-0">
                            <div className="font-light text-gray-500 sm:text-lg dark:text-gray-400">
                                <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">For Developers and Designers</h2>
                                <ul className="space-y-4 text-left text-gray-500 dark:text-gray-400">
                                    <li className="flex items-center space-x-3">
                                        <svg
                                            className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                            className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                                            className="flex-shrink-0 w-3.5 h-3.5 text-purple-600 dark:text-white"
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
                        </div>
                    </div>
                </section>
            </main >



            <footer className="bg-white rounded-lg dark:bg-gray-900 m-4">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <div className='text-sm tracking-widest font-light text-gray-500/100 text-gray-900 dark:text-white'>Reverie</div>
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
                    <span className="block text-sm text-gray-500 sm:text-center dark:text-gray-400">2023 <a href="https://flowbite.com/" className="hover:underline">Reverie</a></span>
                </div>
            </footer>




            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-100"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-100"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="w-full max-w-md transform overflow-hidden rounded-2xl bg-white dark:bg-gray-900 dark:border dark:border-gray-500 p-6 text-left align-middle shadow-xl transition-all relative">
                                    <button type="button" onClick={closeModal} className="absolute top-6 right-6 py-3 px-5 text-sm font-medium text-center text-gray-900 dark:text-white rounded-lg  sm:w-fit hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-gray-700 dark:focus:ring-primary-800">X</button>
                                    <Dialog.Title
                                        as="h3"
                                        className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white"
                                    >
                                        Contact Us
                                    </Dialog.Title>
                                    <section className="bg-white dark:bg-gray-900">
                                        <div className="py-8 px-4 mx-auto max-w-screen-md">
                                            <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want a new website? Get in touch.</p>
                                            <ContactForm />
                                        </div>
                                    </section>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
