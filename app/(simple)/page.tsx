import React from 'react';
import ToolLink from '../../components/ToolLink';
import Link from 'next/link';
import Button from '../../components/Button';
import { getSortedPostsData } from '@/lib/posts';
import Date from '@/components/Date'
import Image from 'next/image';
import AMA from '@/components/AMA';
import Project from '@/components/Project';

export const metadata = {
    title: 'Web Development by Simon Kowalski',
    description: 'My name is Simon and I develop web apps',
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
        <div className='flex flex-col gap-12'>
            <section className="bg-white dark:bg-gray-900 text-center p-6">
                {/* <ModelViewer /> */}
                <h1 className="mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Get a custom web app</h1>
                <p className="mb-6 text-lg font-normal text-gray-500 lg:text-xl sm:px-16 xl:px-48 dark:text-gray-400">by Simon Kowalski</p>
                <div className='mt-8 mb-4'>
                    <Link href='/contact' scroll={false}>
                        <Button>
                            Contact
                        </Button>
                    </Link>
                </div>
            </section>

            <section id='projects' className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Projects</h2>
                </div>
                <div className="p-6 flex flex-col gap-8">
                    <Project title='Sub-contractor' review='its been great working with simon' alt='Sub-contracting symbol' imgSrc="/images/homepage/contractor.png" description='Ive made a real estate website for Rumbl and integrated Sanity.io preview features into their base code' />
                    <Project title='B2B-contract employee' review='its been great working with simon' alt='Sub-contracting symbol' imgSrc="/images/homepage/contractor.png" description='Ive made a real estate website for Rumbl and integrated Sanity.io preview features into their base code' />
                </div>
            </section>

            <section id='why' className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Why choose SK</h2>
                </div>
                <div className="p-6 font-light text-gray-500 sm:text-lg dark:text-gray-400">
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
                            <span>💰 Pay less for the same app - no agency overhead</span>
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
                            <span>⏱️ No bs, no sales - get what you need</span>
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
                            <span>🔄 Unlimited revisions until you're 100% satisfied</span>
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
                            <span>🔧 Ongoing support after completion</span>
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
                            <span>⌛️ Live progress view in Notion of your project's development</span>
                        </li>
                    </ul>
                </div>
            </section>

            <section id='about' className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">About</h2>
                </div>
                <div className="p-6 gap-8">
                    <div className={'text-black dark:text-white flex gap-4'}>
                        <div className='flex gap-4'>
                            <div className='flex flex-col'>
                                <div className='relative aspect-square w-24'>
                                    <Image
                                        priority
                                        src='/images/profile.jpeg'
                                        alt='simon kowalski profile picture'
                                        fill
                                        className='object-cover rounded-lg'
                                        sizes="40vw,(min-width: 1024px) 33vw"></Image>
                                </div>
                                <h2 className='text-lg text-center'>Simon Kowalski</h2>
                            </div>
                            <p>Ive made a real estate website for Rumbl and integrated Sanity.io preview features into their base code</p>
                        </div>
                    </div>
                </div>
            </section>

            <section id='questions' className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Questions</h2>
                </div>
                <div className="p-6 flex flex-col gap-8">
                    <AMA />
                </div>
            </section>

            {/* <section className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Demos</h2>
                </div>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 p-6">
                    <ToolLink title='3D' alt='3d symbol' imgSrc='/images/homepage/3d-models.png' toolLinkHref='3d' />
                    <ToolLink title='Cold outreach' alt='ai tool symbol' imgSrc='/images/homepage/ai_robot.png' toolLinkHref='cold-outreach-ai' />
                    <ToolLink title='Subscriptions' alt='subscriptions symbol' imgSrc='/images/homepage/dollars.png' toolLinkHref='subscription-management' />
                </div>
            </section> */}

            {/* <section className="bg-white dark:bg-gray-900">
                <div className="px-6 max-w-screen-sm">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">Blog</h2>
                </div>
                <Link href='https://www.simonkowalski.com/'>
                    <div className='hover:cursor-pointer w-full flex justify-center items-center text-gray-900 dark:text-white font-medium p-1 text-center'>
                        ➡️ Continued on my new site simonkowalski.com
                    </div>
                </Link>
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
            </section> */}
        </div>
    );
}
