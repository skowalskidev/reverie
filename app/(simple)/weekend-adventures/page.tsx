import React from 'react';

export const metadata = {
    title: 'Weekend adventures',
    description: 'Get absolute rock bottom weekend vacation deals delivered to your inbox 1 time per week',
}

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <section className="flex flex-col gap-4 items-center bg-white dark:bg-gray-900 text-center p-6">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white relative">Cheap weekend trips sent to your inbox</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Get absolute rock bottom weekend vacation deals delivered to your inbox 1 time per week</p>

            </section>
        </div>
    );
}
