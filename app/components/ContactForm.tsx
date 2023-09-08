import React from 'react';
import { useForm, ValidationError } from '@formspree/react';

const ContactForm: React.FC = () => {
    const [state, handleSubmit] = useForm("xoqojrzb");

    if (state.succeeded) {
        return <p className='flex justify-center text-purple-600 text-center'>
            Thank you.<br /><br /> Your message has been sent, we&apos;ll get back to you as soon as we can :)
        </p>;
    }

    return (
        <form onSubmit={handleSubmit} className="space-y-8">
            <div>
                <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-300">Your email</label>
                <input type="email" id="email" name="email" required className="shadow-sm bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-primary-500 focus:border-primary-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 dark:shadow-sm-light" />
                <ValidationError prefix="Email" field="email" errors={state.errors} />
            </div>
            <div className="sm:col-span-2">
                <label htmlFor="message" className="block mb-2 text-sm font-medium text-gray-900 dark:text-gray-400">Your message</label>
                <textarea id="message" name="message" rows={6} className="block p-2.5 w-full text-sm text-gray-900 bg-gray-50 rounded-lg shadow-sm border border-gray-300 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500"></textarea>
                <ValidationError prefix="Message" field="message" errors={state.errors} />
            </div>
            <div className='flex justify-center'>
                <button type="submit" disabled={state.submitting} className="py-3 px-5 text-sm font-medium text-center text-white rounded-lg bg-purple-600 sm:w-fit hover:bg-primary-800 focus:ring-4 focus:outline-none focus:ring-primary-300 dark:bg-primary-600 dark:hover:bg-purple-600 dark:focus:ring-primary-800">Send message</button>
            </div>
        </form>
    );
};

export default ContactForm;
