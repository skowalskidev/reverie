import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 2: My micro-SaaS solo-founder journey',
    date: '2023-11-02 18:26',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Yesterday I sent 10 LinkedIn DMs, no response 🪦, read The Mom Test a little and made a list of 12 SaaSs that are making money.</p>

                    <p>Today I have no idea what to do next as this is the breaking point I've always hit in the past i.e. gather data, do some 'analysis' and have no positive feedback to go off of.</p>

                    <p>So I'll try my best to push through this hump today, wonder how tbh...</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>Decide on an audience to serve<br></br>
                                <div className='font-bold p-4'>Tangible outcome: Pick one audience that can be descirbed in detail</div>
                            </li>
                            <li>Contact people in that audience to carry out interviews
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Offer something to attract participation, can't offer money so I have to offer my time and skills.</li>
                                    <ul className="list-disc list-inside ml-5 p-4">
                                        <li>LinkedIn</li>
                                        <li>Email</li>
                                    </ul>
                                </ul>
                                <span className='font-bold p-4'>Tangible outcome: 10 highly customised cold outreach messages</span>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Seoul Ediya Coffee Lab 02-11-2023 at 18.13.jpg"
                        alt="day 2 image of Simon in a cafe in seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">LinkedIn DMs</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">No Response</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">The Mom Test</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaS List</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Revenue Generation</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Analysis Paralysis</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Positive Feedback</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Overcoming Challenges</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Self-Doubt</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Persistence</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Reflection</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Uncertainty</span>
                </section>
            </div >
        </>
    )
}