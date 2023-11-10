import WeekendTripsForm from '@/components/WeekendTripsForm';
import React from 'react';
import Image from 'next/image';
import ToolLink from '@/components/ToolLink';

export const metadata = {
    title: 'Weekend adventures',
    description: 'Get absolute rock bottom weekend vacation deals delivered to your inbox 1 time per week',
}

export default function Home() {
    return (
        <div className='flex flex-col gap-8'>
            <section className="flex flex-col gap-4 items-center bg-white dark:bg-gray-900 text-center p-6">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white relative">Cheap weekend trips sent to your inbox</h1>
                <p className="text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Get absolute rock bottom weekend vacation deals delivered to your inbox 1 time per week for free</p>
            </section>

            <section className='grid grid-cols-3 gap-4'>

            </section>

            <section className='gap-8 p-6 grid lg:grid-cols-2 items-center'>
                <WeekendTripsForm />
                <div className='relative aspect-square'>
                    <Image
                        src="/images/weekend-trips/DALL·E 2023-11-09 23.01.46 - A European man is sitting relaxed on a pink flamingo floatie in the middle of a swimming pool. It's a sunny day with a clear blue sky. The man appears.png"
                        alt="DALL·E 2023-11-09 23.01.46 - A European man is sitting relaxed on a pink flamingo floatie in the middle of a swimming pool. It's a sunny day with a clear blue sky. The man appears"
                        className="rounded-full"
                        fill
                        sizes='(min-width: 1024px) 352px, 100vw'
                    />
                </div>
            </section>
        </div>
    );
}
