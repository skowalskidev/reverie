import React from 'react';
import ToolLink from '../../components/ToolLink';
import Link from 'next/link';
import Button from '../../components/Button';
import { getSortedPostsData } from '@/lib/posts';
import Date from '@/components/Date'
import Image from 'next/image';

export const metadata = {
    title: 'Reverie Zero',
    description: 'A collection of tools made by myself for myself with the hopes of helping others',
}

type AllPostsData = {
    category: string;
    date: string;
    title: string;
    author: string;
    authorImage: string;
    id: string;
    preview: string;
}[];

export default async function Home() {
    const allPostsData: AllPostsData = await getSortedPostsData();
    return (
        <div className='flex flex-col gap-8'>


            <section className="bg-white dark:bg-gray-900 text-center p-6">
                {/* <ModelViewer /> */}
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Web development</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">by Simon Kowalski</p>
                <div className='mt-8 mb-4'>
                    <Link href='/contact' scroll={false}>
                        <Button>
                            Contact
                        </Button>
                    </Link>
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Products</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                    <ToolLink title='Weekend trips' alt='weekend trips symbol' imgSrc="/images/weekend-trips/DALL·E 2023-11-09 23.01.46 - A European man is sitting relaxed on a pink flamingo floatie in the middle of a swimming pool. It's a sunny day with a clear blue sky. The man appears.png" toolLinkHref='weekend-adventures' />
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Services</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                    <ToolLink title='Contracting' alt='contractor symbol' imgSrc='/images/homepage/contractor.png' toolLinkHref='startup-contractor' />
                    <ToolLink title='Websites' alt='web development symbol' imgSrc='/images/homepage/room.png' toolLinkHref='web-development' />
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Demos</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                    <ToolLink title='3D' alt='3d symbol' imgSrc='/images/homepage/3d-models.png' toolLinkHref='3d' />
                    <ToolLink title='Cold outreach' alt='ai tool symbol' imgSrc='/images/homepage/ai_robot.png' toolLinkHref='cold-outreach-ai' />
                    <ToolLink title='Subscriptions' alt='subscriptions symbol' imgSrc='/images/homepage/dollars.png' toolLinkHref='subscription-management' />
                </div>
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Blog</h2>
                </div>
                <div className="grid gap-8 lg:grid-cols-2 p-6">
                    {allPostsData.map(({ id, date, title, author, authorImage, category }, index) => (
                        <Link key={index} href={`/blog/${id}`}>
                            <article className="outline outline-black text-black hover:!text-purple-600 hover:!outline-purple-600 dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-8 relative">
                                <div className="flex justify-between items-center text-gray-500">
                                    <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                        <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                        {category}
                                    </span>
                                    <span className="text-base"><Date dateString={date} /></span>
                                </div>
                                <h2 className="text-lg tracking-tight ">{title}</h2>
                                <div className="flex justify-between items-center">
                                    <div className="flex items-center space-x-4">
                                        <Image className="w-7 h-7 rounded-full object-cover"
                                            width={28}
                                            height={28}
                                            src={authorImage}
                                            alt="Jese Leos avatar"
                                        />
                                        <span className="font-medium">
                                            {author}
                                        </span>
                                    </div>
                                    <div className="inline-flex items-center font-medium hover:underline">
                                        Read more
                                        <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                    </div>
                                </div>
                            </article>
                        </Link>
                    ))}
                </div>
            </section>
        </div>
    );
}
