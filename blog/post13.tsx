import Image from 'next/image';
import Link from 'next/link';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 12: My micro-SaaS solo-founder journey',
    date: '2023-11-12 16:31',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>A few things to mention today before I address the heartwarming feedback and engagement I received on Twitter/X.</p>

                    <p>Regarding the weekend trip product from earlier.</p>

                    <ol className="list-decimal list-inside p-4 space-y-4">
                        <li>I posted about it on LinkedIn and twitter but not on indiehackers (since you need to elevated to vip status).</li>
                        <li className='font-bold'>I got 2 signups from close friends. (Absolute Chad MVPs!)</li>
                    </ol>

                    <p>Following from that, I was actually scared to post on LinkedIn and experienced an adrenaline rush because I was about to embarass myself with a product that was going to fail (cos most do and I will most likely go through many more duds). I was embarassed to show my failure to my ex-bosses and people who I knew. So my solution was to post on there as fast as possible! Because I knew that after I get the first embarassment over with I won't be judged after that because now I'm wearing the: posts weird stuff label, which is what I was aiming for because now I can put my foot to the floor and not hold myself back with fear of embarassment in my head.</p>

                    <p>Regarding the product I'll do one iteration for those 2 MVPs but it's a wrap since there was no interest from anyone that would come for the value propostion as opposed to support me as a friend.</p>

                    <p>Now I want to address the attention and support I got on twitter.</p>

                    <p className='font-bold'>I really, really appreaciate you guys!! It means a lot to receive these words of encouragement, and engagement! I woke up this morning, saw my dms and comments and just smiled man. I don't deserve this support because I could be putting in more work, so after that, I decided to go harder today! Thank you guys!</p>

                    <p className='font-bold'>Yesterday I went through Part 1/4 of the Svelte tutorial, registered the domain and put up a new fresh demo project up: <Link className='text-purple-600' href={'https://www.simonkowalski.com/'}>simonkowalski.com</Link></p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Learn Sveltekit<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Learn the parts that I need to create my site. (the tutorial front loads all the info so I'll be buried in documentation mastery if I don't skip to the relevant parts that I actually need right now to rebuild my site.</li>
                                    <li>Register a domain with my name?</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: Create a personal website with my name in the URL and one page in svelte</div>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Photo on 12-11-2023 at 16.27.jpg"
                        alt="Simon at a study room in Seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Day12MicroSaaS</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">WeekendTripProduct</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">LinkedInChallenges</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">TwitterEngagement</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">StartupAdventures</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">OvercomingFear</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">EmbracingFailure</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaSIteration</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">FriendSupport</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SvelteLearning</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SimonKowalskiDotCom</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">PersonalBrandBuilding</span>
                </section>
            </div >
        </>
    )
}