import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 9: My micro-SaaS solo-founder journey',
    date: '2023-11-07 10:00',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Yesterday I got my steam account stolen so didn't get to play :(</p>


                    <p>But on a serious note, </p>

                    <p></p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Yesterday's top 5 ideas:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                workingadblockers.com
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>A list of working adblockers for YouTube that’s up to date much like the pirate bay proxy site</li>
                                    <li>Guides to adblocking</li>
                                    <li>Moral justifications for the environment and creator rev share</li>
                                    <li>Encouragement to donate to creators</li>
                                </ul>
                            </li>
                            <li>Google crawler troubleshooter for next.js sites</li>
                            <li>AI generated alt text for images</li>
                            <li>Actuallyusefulaitools.com a list of tools which actually add value over just reselling a single ChatGPT feature</li>
                            <li>
                                A curated, hand-picked list of actually great value deals now
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Accommodations</li>
                                    <li>Country wide, not just per city because I don’t care I just want a great deal not flick through all cities to see deals and miss out on ones where I don’t even know the existence of the given city</li>
                                    <li>Live deals, do not show just missed it ones</li>
                                    <li>Make it personalised to an airport near the user and tailored to his preferences. Every weekend he’ll get a cheap adventure plan or maybe every week an idea for a weekend getaway for cheap. All that’s left to do is to book the trip, free great deal trip plans every week</li>
                                    <li>Source: everyone loves to save money, and people like trips and adventures. So if I can do the research for an office worker and surprise him with a complete steal of a round trip price then just give him the potential for a great adventure every weekend to talk about when he comes back on Monday, then I can sell that thrill that dream that is served every week.</li>
                                    <li>This idea won't be feeding into the lame LinkedIn crap which I hate and will actually focus on what I'm actively doing and understand how to do. And it’s something that’s ACTUALLY fun to do and discuss not that stale fake excitement people exude on LinkedIn about their whatever boring crap everyone fake likes</li>
                                    <li>I could also have social proof as a 3D globe or even a simple 2D map with pins where customers have signed up from</li>
                                    <li>Maybe try to build a business around my lifestyle rather than trying to hyperoptimise by venturing far into foreign industries and being completely clueless, desperately depending on others to provide context from scratch. What if I didn’t fight my own lifestyle and acknowledged this unfair advantage I have and put it to use instead of trying to start from 0 on an equal playing field. Life is unfair, stop trying to fight this fact and embrace and leverage it. Life’s not how you want it to be but just the way it is. Work with it, not against it.</li>
                                    <li>Remember that the service needs to be personal to each user, I need to take care of each one individually not a generic product which doesn’t pay attention to anyone. Look at the comment someone made under my post, terrible, made me feel like dirt which can serve his agenda, there was nothing in it for me. Seems like Paul Graham’s book recommendation of How to win friends was good despite the guru scammer author behind it.</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <p>So I like 2. The workingadblockers.com because it's an actual problem right now but not sure where this will go after the youtbube adblocker war fiasco passes. I also like the last idea that came to me in a laundromat or at least I fleshed out there.</p>

                    <p>I'll pass on having more conversations and build something which attracts people to me instead (hopefully).</p>


                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Create an mvp email collecting page for trip notifier.<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Do not rely on other platforms to eliminate hacking solutions and platform risk.</li>
                                    <li>Try to 'hit' real value propositions without interviewing people at this stage.</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: simple one page on my site (buy a separate domain if it gets any traction) with a city selector and email input to subscribe to the trips.</div>
                            </li>
                            <li style={{ textDecoration: 'line-through' }}>
                                Create a listicle website with working adblockers
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>a table</li>
                                    <li>green ticks</li>
                                    <li>red crosses</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: domain registered (because this is topical and seo depandent) + one page site with a table.</div>
                            </li>
                        </ol>
                    </div>

                    <p>Actually scratch the adblock idea, reddit is already overran with posts and solutions and I'm not a diehard follower of this situation so it will be a pain to check and update the site everyday for such a mundane topic with people only getting utitlity from the site one time and never come back to it most likely.</p>

                    <Image
                        src="/images/blog/Photo on 09-11-2023 at 19.00.jpg"
                        alt="Simon at a library in Seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">MicroSaaSJourney</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SoloFounder</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SteamAccountRecovery</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">AdBlockingSolutions</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">YouTubeAds</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">TechStartups</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">AIAltText</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">ValueDrivenTools</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">TravelDealsNotifier</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">PersonalizedAdventures</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">LaundromatIdeas</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">MVPDevelopment</span>
                </section>
            </div >
        </>
    )
}