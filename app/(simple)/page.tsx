import React from 'react';
import ToolLink from '../../components/ToolLink';
import ThemeToggle from '../../components/ThemeToggle';
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
        <>
            <section className="bg-white dark:bg-gray-900 mt-28 text-center p-6">
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">fast free <span className="text-purple-600 dark:text-purple-600">fun</span> easy</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">A collection of tools made by myself for myself with the hopes of helping others</p>
                <Link href='/contact' scroll={false}>
                    <Button>
                        Contact
                    </Button>
                </Link>
            </section>

            <section className="grid grid-cols-2 md:grid-cols-5 gap-4 p-6">
                <ToolLink title='Subscription Management' alt='subscriptions symbol' imgSrc='/images/homepage/dollars.png' toolLinkHref='subscription-management' />
                <ToolLink title='Web Development' alt='web development symbol' imgSrc='/images/homepage/room.png' toolLinkHref='web-development' label='*Service' />
            </section>

            <section className="bg-white dark:bg-gray-900">
                <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-16 lg:px-6">
                    <div className="mx-auto max-w-screen-sm text-center lg:mb-16 mb-8">
                        <h2 className="mb-4 text-3xl lg:text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">Blog</h2>
                        <p className="font-light text-gray-500 sm:text-xl dark:text-gray-400">Insights in the hopes of saving you time</p>
                    </div>
                    <div className="grid gap-8 lg:grid-cols-2">
                        {allPostsData.map(({ id, date, title, author, authorImage, preview }, index) => (
                            <Link key={index} href={`/posts/${id}`}>
                                <article className="p-6 bg-white rounded-lg border border-gray-200 shadow-md dark:bg-gray-800 dark:border-gray-700">
                                    <div className="flex justify-between items-center mb-5 text-gray-500">
                                        <span className="bg-primary-100 text-primary-800 text-xs font-medium inline-flex items-center px-2.5 py-0.5 rounded dark:bg-primary-200 dark:text-primary-800">
                                            <svg className="mr-1 w-3 h-3" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M2 5a2 2 0 012-2h8a2 2 0 012 2v10a2 2 0 002 2H4a2 2 0 01-2-2V5zm3 1h6v4H5V6zm6 6H5v2h6v-2z" clipRule="evenodd"></path><path d="M15 7h1a2 2 0 012 2v5.5a1.5 1.5 0 01-3 0V7z"></path></svg>
                                            Article
                                        </span>
                                        <span className="text-sm"><Date dateString={date} /></span>
                                    </div>
                                    <h2 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{title}</h2>
                                    <div className="line-clamp-3 mb-5 font-light text-gray-500 dark:text-gray-400" dangerouslySetInnerHTML={{ __html: preview }}></div>
                                    <div className="flex justify-between items-center">
                                        <div className="flex items-center space-x-4">
                                            <Image className="w-7 h-7 rounded-full object-cover"
                                                width={28}
                                                height={28}
                                                src={authorImage}
                                                alt="Jese Leos avatar"
                                            />
                                            <span className="font-medium dark:text-white">
                                                {author}
                                            </span>
                                        </div>
                                        <div className="inline-flex items-center font-medium text-purple-600 dark:text-white hover:underline">
                                            Read more
                                            <svg className="ml-2 w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                        </div>
                                    </div>
                                </article>
                            </Link>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
