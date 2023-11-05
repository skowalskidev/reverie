import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 5: My micro-SaaS solo-founder journey',
    date: '2023-11-05 15:44',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Yesterday the inevitable happened that had me in this postion of no idea to begin with. I failed to find a new idea, hello brick wall! Turns out hitting it again didn't make it disappear 🧱.</p>

                    <p>The advice is to talk to people before writing a single line of code. But very few people want to talk and those who do are not at a point in their business life where they're experiencing a hair on fire problem. The only problem they're experiencing is the old need more clients problem. Well everybody in the world does.</p>

                    <p>So the conclusion that I've already come to before is: build something small of value to lure people in to talking to me.</p>

                    <p>I mean what else can I do? What else is accessible to me at this point?</p>

                    <p>It's great to hear the romanticised best practices and theory until the rubber meets the road and everything is different and falls apart.</p>

                    <p>But if I can pull this off and not go back to having a 9-5 with every dollar being earned with work then it's worth going through the trouble of figuring out.</p>

                    <p>The only 'accessibe' audience I have that at this point in time (2023) that me (Simon) can get in front of and get responses with relative ease is LinkedIn. So maybe create a product for them?</p>

                    <p>Nb. I got inspired to get this idea of making something for LinkedIn from the aiCarousels.com creator and his "Building and Launching a SaaS in 10 Days" article.</p>

                    <p>To reduce the risk of siking my time into unfruitful projects which lead nowhere I should also cap the time investment to a week or so.</p>

                    <p>I will most likely go through a lot of duds so I must get those over with and in the process build up a reputation for myslef which I can later use to get conversations (as a founder).</p>

                    <p>So the thing I will do differently now is pick an audience and build something for them (small feature which adds value). I will do this without it being the perfect audience and the perfect feature / product, heck if it sucks it'll be better than just reading, researching and being stuck in analysis paralysis which I've entertained for the past 6 years, while others have been failing, building more and finally succeeding e.g. Pieter Levels "Only 4 out of 70+ projects I ever did made money and grew".</p>


                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Describe a LinkedIn idea<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Outline a value add for LinkedIn creators</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: one idea for LinkedIn creators and a plan to build it this week (tomorrow's a Mon.).</div>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Photo on 05-11-2023 at 16.01.jpg"
                        alt="day 2 image of Simon in a cafe in seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Encountering Creative Block</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Seeking Advice Pre-Development</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Small Value Propositions</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Lack of Options</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Reality of Best Practices</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Avoiding Traditional Employment</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Utilizing LinkedIn Audience</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Inspiration from aiCarousels.com</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Time Investment Cap</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Building Reputation Through Projects</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Targeted Audience Development</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Today's Action Plan</span>
                </section>
            </div >
        </>
    )
}