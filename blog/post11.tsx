import Image from 'next/image';
import Link from 'next/link';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 10: My micro-SaaS solo-founder journey',
    date: '2023-11-10 16:18',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Yesterday I started working on my new SaaS, did some of the landing page.</p>

                    <p>I've decided to host it on my site and see if it gets any traction. Then I'll move it to it's own domain.</p>

                    <p>If I keep buying new domains everytime I start a new project that may get expensive since I'm a micro-SaaS business newb.</p>


                    <p>I've worked on it some and plan on working on it some more today, <Link className='text-purple-600' href='/weekend-adventures'>
                        New Project (Weekend Adventures)
                    </Link></p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Finish the landing page.<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Images.</li>
                                    <li>Form.</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: Users can enter their details and subscribe to cheap weekend trip ideas delivered to their email.</div>
                            </li>
                            <li>
                                Market my weekend trips project.
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Twitter</li>
                                    <li>Indiehackers</li>
                                    <li>LinkedIn</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: appropriately tagged posts and feedback/advice request forum posts.</div>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Photo on 10-11-2023 at 16.08.jpg"
                        alt="Simon at a study room in Seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Day10FounderDiary</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">MicroSaaSJourney</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaSLandingPage</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SoloFounder</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">WeekendAdventuresProject</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">StartupCosts</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaSDevelopment</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">EmailSubscriptionService</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">TravelTech</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">IndieMarketing</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">LinkedInNetworking</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">IndieHackerCommunity</span>
                </section>
            </div >
        </>
    )
}