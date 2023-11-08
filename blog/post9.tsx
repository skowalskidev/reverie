import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 8: My micro-SaaS solo-founder journey',
    date: '2023-11-07 10:00',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>This morning I interviewed a lovely lady from the medical sector who does research. I've gotten an insight into the difficulties with finding and looking through research papers. The crucial papers are often missed.</p>

                    <p>On another note though, I've used the fireflies.ai plugin and saw that it has a notion integration. Now it seems to me like the big pain point I've outlined in my previous post i.e. the intagration with notion and the summary, full-transcript, source audio are all neatly noted.</p>

                    <p>If I understood the missing value proposition then the plan from earlier is not worthwhile with today's discovery. I.e. I'd be remaking what exists.</p>

                    <p>Also yesterday I researched the technical stuff for making a bot which joins a google meeting and it turned out that google blocks the python selenium automated approach and the API docs may have changed the official approach 2 months back with the new approach being in testing phase.</p>

                    <p className='font-bold'>The conclusion being, maybe all of this advice with interviewing people sounds great and logical but doesn't hold up in the real world.</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Brainstorm new ideas<br></br>
                                <span className='font-bold'>Criteria:</span>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Do not rely on other platforms to eliminate hacking solutions and platform risk.</li>
                                    <li>Try to 'hit' real value propositions without interviewing people at this stage.</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: 5 Ideas which meet the criteria above.</div>
                            </li>
                            <li>
                                Relax a bit and play some games
                            </li>
                        </ol>
                    </div>


                    <Image
                        src="/images/blog/Photo on 08-11-2023 at 10.25.jpg"
                        alt="Simon at a library in Seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Micro-SaaS Journey</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Solo-Founder Insights</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Google Meet Automation</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Python Bots</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">OpenAI Whisper Transcription</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Meeting Summary Tool</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Notion Integration</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaS Startup</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Tech Entrepreneurship</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Automation Hacking</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Developer Diary</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">Building a SaaS</span>
                </section>
            </div >
        </>
    )
}