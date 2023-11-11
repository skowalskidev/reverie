import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 11: My micro-SaaS solo-founder journey',
    date: '2023-11-11 16:56',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Today a quick one.</p>

                    <p>Yesterday I talked to a salesperson and he encouraged me to talk to more salespeople, I've also gained some context for problems sales people are experiencing.</p>

                    <p>Again I was told some of the reasons for taking the call with me and there were motives for starting a podcast with 'Nobodies' who are creating a SaaS tool 🤣. I was really humbled with that title 🤣. Another motive was building a tool for salespeople in the future by the salesguy.</p>

                    <p>One thing is becoming clear as day, only people with aligned motives are incentivised to take the call. But not those who have a true problem they want a solution to, rather those who want to build a tool of their own or somehow have a service to offer my persona 'startup founder'. What I'm asking for is always secondary.</p>

                    <p>So do I keep pushing/begging for more conversations or create a tool for myself? I think that perhaps my idea from a long while back to create a sellable product or just enter any industry as a worker and create tools for myself to succeed above other peers then sell them the tool would be more reasonable.</p>

                    <p>I've noticed that there are some crucial questions I'd like to keep someone on the call for like an hour, have them share their screen and talk me through, have followup calls, have them test my tool etc. but I don't see this happening with anyone other than myself.</p>

                    <p>Today I'll learn Svelte, I want to jump ship from Next.js because Svelte is actually better and compared to other up and coming frameworks it's production ready.</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Learn Svelte<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Complete the tutorial</li>
                                    <li>Create a one page personal website</li>
                                    <li>Register a domain with my name?</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: Create a personal website with my name in the URL and one page in svelte</div>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Photo on 10-11-2023 at 19.46.jpg"
                        alt="Simon at a study room in Seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Day11MicroSaaS</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SoloFounderInsights</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SalespeopleFeedback</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaSJourney</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">PodcastIdeas</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaSforSales</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">NetworkingChallenges</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">ToolDevelopment</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">LearningSvelte</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">PersonalBrandWebsite</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">StartupStrategy</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">NextjsToSvelte</span>
                </section>
            </div >
        </>
    )
}