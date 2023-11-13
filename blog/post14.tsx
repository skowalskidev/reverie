import Image from 'next/image';
import Link from 'next/link';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 13: My micro-SaaS solo-founder journey',
    date: '2023-11-13 16:39',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Yesterday I went on a rabbit hole tangent and researched the frontend frameworks, a classic.</p>

                    <ol className="list-decimal list-inside p-4 space-y-4">
                        <li>Astro - spits out html with reactive islands but not all themes are 100 on all pagespeed benchmarks but the final straw that made me not choose it was the default out of the box blog template which had accessibility broken and a few other bad scores.</li>
                        <li>Solid - no vDom with hydration, SolidStart in beta but can remove hydration with Astro, SolidStart in beta so no api and routing :( Would use if solidstart was ready</li>
                        <li>Qwik - some vDom but no hydration, plus they’re peddling their other tool which is a complete turn off for me</li>
                        <li>Svelte - no vDom with hydration, slower than qwik, also performance starts to suffer as you scale your app, technically could couple it with Astro to make the front page super fast</li>
                    </ol>

                    <p>Anyway after spinning my wheels, I came to the conclusion that Sveltekit/Svelte is the best choice currently i.e. better than Next.js/React (which in turn is better than Nuxt/Vue apparrently) thanks to smaller package sizes and a baked in state management that people aren't fighting over (in Next/React people don't like hooks so they use Redux but some don't like that either so Zustand is being pitched but the easier syntax selling point just doesn't seem easier to me in the examples I've seen).</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Learn Sveltekit (Continue doing what I got distracted from doing yesterday.)<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Learn the parts that I need to create my site. (the tutorial front loads all the info so I'll be buried in documentation mastery if I don't skip to the relevant parts that I actually need right now to rebuild my site.</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: finish adding a basic blog to my site so that tomorrow's post can be on the new site.</div>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Photo on 13-11-2023 at 16.33.jpg"
                        alt="Simon at a study room in Seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Micro-SaaS</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Solo-Founder</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Frontend Frameworks</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Astro</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Solid</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Qwik</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Svelte</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SvelteKit</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Next.js</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">React</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">State Management</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Web Development</span>
                </section>
            </div >
        </>
    )
}