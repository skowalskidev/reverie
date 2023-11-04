import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 4: My micro-SaaS solo-founder journey',
    date: '2023-11-04 14:36',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>This morning I did the scheduled call and as expected no real value came of it for neither side...</p>

                    <p>The lady which I interviewed thought I may be a potential customer and I've got a feeling she'd have not agreed had she known that I'm about to try and find out about her work routine and problems.</p>

                    <p>I have 2 more calls in the pipeline.</p>

                    <p>Maybe this isn't the stage to schedule calls with strangers.</p>

                    <p>It seems that those points where people are looking for solutions to some problem happen at various times and a blind interview has a low chance of picking up these insights.</p>

                    <p>I ran into this problem in the past while doing interviews while I was still employed. Back then I did the interviews after work. Another one of my traits on display, doing what doesn't work repeatedly because maybe it will work this time 😂</p>

                    <p>So once again I've come to the conclusion that I need to create something of value first to attract people who will want their problem solved better and volunteer to help me solve their problem throught emails/complaints and feature requests.</p>

                    <p>From this vantage point, the next in line accessible option for me to try is to copy some product (valiated demand) improve it and have people try it.</p>

                    <p>Or</p>

                    <p>Create content for the audience I want to serve and see what they're interested in? But then what if I become a failed writer, have to stop writing and be back to this point again?
                    </p>

                    <p>
                        How about other successful indiehackers?
                    </p>
                    <ul className="list-disc list-inside ml-5 p-4">
                        <li>Tony Dinh: built up a twitter audience through posting entertainment related to the target audience.</li>
                        <li>...</li>
                    </ul>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Decide on what to copy and improve<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>read Indiehackers for inspiration</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: Pick one thing that can be built and improved in a week or so</div>
                            </li>
                            <li>
                                See where the users of this product hang out<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>search for them on google and stalk the individual users using google to see where they go</li>
                                    <li>do customer safari i.e. look at the job boards </li>
                                </ul>
                                <span className='font-bold p-4'>Tangible outcome: 2+ channels to contact target customers</span>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Photo on 04-11-2023 at 15.25.jpg"
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