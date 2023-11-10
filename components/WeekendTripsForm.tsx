"use client"

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Button from './Button';

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("mwkdzgel");

    if (state.succeeded) {
        return <p className='flex justify-center text-purple-600 text-center'>
            Thank you.<br /><br /> Your individually crafted weekend trip ideas will be sent to you once a week :)
        </p>;
    }

    return (
        <form onSubmit={handleSubmit} className='flex flex-col gap-4'>
            <div className='flex flex-col gap-1'>
                <div className='flex gap-2'>
                    <div className='flex-grow'>
                        <label htmlFor="country" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">🏠 Your country</label>
                        <input type="country" id="country" name="country" required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                        <ValidationError prefix="country" field="country" errors={state.errors} />
                    </div>
                    <div className='flex-grow'>
                        <label htmlFor="city" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">⛳️ Your city</label>
                        <input type="city" id="city" name="city" required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                        <ValidationError prefix="city" field="city" errors={state.errors} />
                    </div>
                </div>
                <div>
                    <label htmlFor="name" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">😊 Your name</label>
                    <input type="name" id="name" name="name" required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                    <ValidationError prefix="name" field="name" errors={state.errors} />
                </div>
                <div>
                    <label htmlFor="email" className="block mb-2 text-base font-medium text-gray-900 dark:text-gray-300">✉️ Your email</label>
                    <input type="email" id="email" name="email" required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-base rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                    <ValidationError prefix="Email" field="email" errors={state.errors} />
                </div>
            </div>
            <div className='flex justify-center'>
                <Button type="submit" disabled={state.submitting}>
                    Subscribe
                </Button>
            </div>
        </form>
    );
};

export default ContactForm;
