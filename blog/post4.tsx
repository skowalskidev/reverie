import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 3: My micro-SaaS solo-founder journey',
    date: '2023-11-03 14:52',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Yesterday I targetted people who post a lot (each day or so) on LinkedIn sent 10 LinkedIn DMs which mentioned, 2 calls booked 🎉. I also sent some emails to some ecom store owners but no response as of yet. I know 10 linkedIn DMs ain't shit and I'm not putting up any impressive numbers but I'm working my way up and taking it in steps.</p>

                    <p>It may be due to the demographic but I also changed the message to make it shorter and referenced their field.</p>

                    <p>Here is the message that I've used ⬇️</p>

                    <p className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <b>Title: Micro-SaaS founder</b>

                        Hi [?],
                        <br></br>
                        <br></br>
                        Noticed your [?] and [?] experience. I'm a micro-SaaS founder in the AI space and would love to exchange insights. Are you available for a 15-min call?
                        <br></br>
                        <br></br>
                        Thanks!
                    </p>

                    <p>Tomorrow morning is the first call so I've got to prepare some highly relevant, Mom test questions.</p>

                    <p>I really have no product or idea and have failed in the past during calls like these but back then the questions were generic and didn't fully follow the Mum test rules.</p>

                    <p>I'm not holding my breath to get anywhere but it's the best I have at this stage so I'm going to try it out.</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>Send more LinkedIn DMs<br></br>
                                <div className='font-bold p-4'>Tangible outcome: Send 10+ more DMs</div>
                                <li>Compile relevant questions</li>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li> using the Mom Test as a reference and my interviewee background</li>
                                </ul>
                                <span className='font-bold p-4'>Tangible outcome: high quality custom questions with follow up to extract as much context as possible</span>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Seoul Day 3 03-11-2023 at 15.17.jpg"
                        alt="day 2 image of Simon in a cafe in seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">LinkedIn Outreach</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Cold Messaging</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Booking Calls</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">E-commerce Engagement</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Micro-SaaS Journey</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Insight Exchange</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Mom Test Application</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Relevant Questioning</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Cold Call Preparation</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Incremental Progress</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Targeted Communication</span>
                </section>
            </div >
        </>
    )
}