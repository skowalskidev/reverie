import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Starting my journey as a micro-SaaS solo-founder',
    date: '2023-11-01 17:57',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>I just completed my last day at work yesterday. I have saved up for a 1 year runway to make myself a micro-saas founder/indiehacker.</p>

                    <p>I've been wanting to start a business of my own since 2017 (6 years till now) but haven't been able to do so remaining a wannabe-founder :(</p>

                    <p>I'll work hard to make this new chapter in my life end in not having to get another full-time job, because 9-5s suck!</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>Download The Mom Test
                                <ul className="list-disc list-inside ml-5  p-4">
                                    <li>Learn how to talk to cold customers</li>
                                    <li>Get context data about their day to day problems</li>
                                    <li>Get product ideas</li>
                                </ul>
                                <span className='font-bold p-4'>Tangible outcome: send at least 10 cold emails to potential customers</span>
                            </li>
                            <li>Make a list of micro-saass
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Examine them</li>
                                    <li>Pick the one I would enjoy COPYING and serving its customer base and have the ability to improve as if I acquired it and had to increase the revenue</li>
                                </ul>
                                <span className='font-bold p-4'>Tangible outcome: a list of at least 10 micro-saass and my top 1 pick</span>
                            </li>
                        </ol>
                    </div>

                    <p>So it's Day 1, Seoul, $0  :)</p>
                    <Image
                        src="/images/blog/Seoul Day 1 Unemployed 01-11-2023 at 17.27.jpg"
                        alt="day 1 image of Simon in a cafe in seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article>
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Micro SaaS</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Starting my journey</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Micro SaaS founder</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">2023-11-01</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Simon</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">last day at work</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">1 year runway</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">indiehacker</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">business</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">wannabe-founder</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">full-time job</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">9-5s</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">day 1</span>
                </section>
            </div>
        </>
    )
}