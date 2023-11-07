import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 7: My micro-SaaS solo-founder journey',
    date: '2023-11-07 15:53',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Last night I've done the plan and I've come to the conclusion that I need to keep these blog posts short and sweet because they're taking too long to write and structure, by too long I mean {'>'}5min 😁.</p>

                    <p>So I'll keep it short and sweet from now on.</p>

                    <p>I'm a bit intimidated by the plan that I've come up with: it looks like making Google bots is not a run of the mill, blueprinted, 5min job but will take some hacking to get it to work.</p>

                    <p>Rolling up my sleeves and getting to work then.</p>

                    <p>P.S. I'm a bit lazy and chilling a bit after losing my job hence why I'm not going faster *feeling guilty*. But I'll keep consistent because so far my results are {'>'} 0 which means that creating a micro-SaaS as a solo-founder for me at this time is not a 100% impossible feat but that is yet to be uncovered.</p>

                    <p>I truly wonder if the micro-SaaS solo-founder blueprint I've compiled from so many podcasts, articles and word-of-mouth advice will work for me. I'm not sure if I'm doing it right but I'm going to try. I really doubt myself and to be honest I think this won't work and I will need to get another job. But I will just keep putting one foot in front of the other because even if I don't believe in myself but go throught the motions and act then my future clients won't read my mind and close their wallets if the product suits their fancy right?</p>

                    <p>PS I'm not using any spellcheck or even MDX for this blog, it's straght .tsx but there's no money in investing to make it not suck so nobody will care. It's technically embarassing though.</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Yesterday's Meeting Transcription Tool Implementation Plan:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Join google meetings: Python automation bot
                            </li>
                            <li>
                                Transcription: OpenAI Whisper
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>
                                        Create better transcription
                                        <ol className="list-decimal list-inside ml-5 p-4">
                                            <li>Summary</li>
                                            <li>
                                                Full transcript
                                                <ul className="list-disc list-inside ml-5 p-4">
                                                    <li>Format it per speaker (e.g., "simon: ... , sid: ...")</li>
                                                </ul>
                                            </li>
                                            <li>Full transcript audio</li>
                                        </ol>
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Record the participants’ video (leave it out for now because it seems cumbersome)
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>
                                        Hold on if the python bot is in the meeting and it’s recording audio and video then maybe it’ll be easy
                                    </li>
                                </ul>
                            </li>
                            <li>
                                Send the transcript to Notion after the meeting without Zapier (has to be no-click easy and seamless)
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Notion has an API for integrations</li>
                                </ul>
                            </li>
                        </ol>
                    </div>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Create a bot which can join my google meetings<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>MVP, no audio recording or other features yet.</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: Seeing the bot in my test google meeting.</div>
                            </li>
                        </ol>
                    </div>


                    <Image
                        src="/images/blog/Photo on 07-11-2023 at 15.51.jpg"
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