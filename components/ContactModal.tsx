"use client"

import React, { Fragment } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import ContactForm from './ContactForm';
import { useRouter } from 'next/navigation';

export default function ContactModal() {
    const router = useRouter()
    return (
        <>
            <Transition appear show={true} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={() => router.back()}>
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
                                    <button type="button" onClick={() => router.back()} className="absolute top-6 right-6 py-3 px-5 text-base font-medium text-center text-gray-900 dark:text-white rounded-lg  sm:w-fit hover:bg-gray-100 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:hover:bg-gray-700 dark:focus:ring-primary-800">X</button>
                                    <Dialog.Title as="h3" className="mb-4 text-4xl tracking-tight font-extrabold text-center text-gray-900 dark:text-white">
                                        &apos;contact&apos;
                                    </Dialog.Title>
                                    <section className="bg-white dark:bg-gray-900">
                                        <div className="py-8 px-4 mx-auto max-w-screen-md">
                                            {/* <p className="mb-8 font-light text-center text-gray-500 dark:text-gray-400 sm:text-xl">Want a new website? Get in touch.</p> */}
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
};