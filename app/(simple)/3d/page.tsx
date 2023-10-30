import React from 'react';
import ModelViewer from '@/components/ModelViewer';

export const metadata = {
    title: '3D Models',
    description: 'Add 3D to your website',
}

export default function Page() {
    return (
        <>
            <section className="flex flex-col gap-4 items-center bg-white dark:bg-gray-900 text-center p-6">
                <span className="lg:hidden bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">pending<br></br> SEO<br></br> optimization</span>
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tigh md:text-5xl lg:text-6xl dark:text-white relative">3D models<span className="hidden lg:block absolute top-0 -right-28 bg-pink-100 text-pink-800 text-xs font-medium mr-2 px-2.5 py-0.5 rounded dark:bg-gray-700 dark:text-pink-400 border border-pink-400">pending<br></br> SEO<br></br> optimization</span></h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">Add 3d to your website</p>
            </section>
            <section className="bg-white dark:bg-gray-900 mt-3 text-center p-6">
                <ModelViewer />
            </section>
        </>
    );
}
