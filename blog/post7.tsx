import Image from 'next/image';

Post.metadata = {
    category: 'Micro SaaS',
    title: 'Day 6: My micro-SaaS solo-founder journey',
    date: '2023-11-06 14:10',
    author: 'Simon',
    authorImage: '/images/captain-tylor.jpg',
};

export default async function Post() {
    return (
        <>
            <div className="flex flex-col gap-6 justify-between px-4 mx-auto max-w-screen-xl text-gray-900 dark:text-gray-400" style={{ gap: '48px' }}>
                <article className="mx-auto w-full max-w-2xl format format-sm sm:format-base lg:format-lg format-blue dark:format-invert flex flex-col gap-4">
                    <p>Whoa, a bit of a whirwind of events took place since yesterday till now.</p>

                    <p>I came up with an idea and a plan to implement it last night.</p>

                    <p>This morning I had a call with Siddharth Sharma, the founder of YellowKyte, a company which helps SaaS companies with marketing.</p>

                    <p>In retrospect it makes perfect sense why these people took meetings with me i.e. the software agency lady thought I was looking for engineers/she may have seen me as a client. Siddharth on the other hand may have seem me as the client/future client after I introduced myself as a "micro-SaaS founder" (LinkedIn message below).</p>

                    <p className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-bold'>Initial outreach message:</span>
                        Hi Siddharth,<br></br>
                        <br></br>
                        Noticed your SaaS marketing company and overall marketing experience. I'm a micro-SaaS founder in the AI space and would love to exchange insights. Are you available for a 15-min call?<br></br>
                        <br></br>
                        Thanks!
                    </p>

                    <p>Ok back to the main point. The meeting went very well and I ran my idea from yesterday (included at the bottom) past Siddharth without mentioning it following the Mom Test philosophy.</p>

                    <p>It seems that the he was using a tool which performed a similar funcition before but gave it up because it was too cumbersome to deal with and made little difference to his final result vs just using the vanilla default LinkedIn post input box.</p>
                    <h2 className='text-2xl font-extrabold'>Yesterday's Idea (discarded)</h2>
                    <p>
                        After 5 hours and almost giving up on the brainstorm I came up with the following idea. I wanted to avoid LinkedIn automations because it’s illegal on LinkedIn, feature big & complex and there are a lot of products doing it already.
                    </p>
                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>

                        <h3 className="mb-3 font-bold">One idea for LinkedIn creators:</h3>
                        <ul className="list-disc list-inside mb-3">
                            <li>Post topic - engagement analysis & future post topic suggestions</li>
                        </ul>
                        <h3 className="mb-3 font-bold">A plan to build it this week:</h3>
                        <ol className="list-decimal list-inside mb-3">
                            <li>Input field to add your LinkedIn Profile id or link</li>
                            <li>Get the generation results</li>
                            <li>See the simple analytics on a timeline with post short summaries (max 3 words)</li>
                            <li>See topic recommendations to write about in the future</li>
                            <li>A button to get AI sub-topic drafts and content drafts
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>No function</li>
                                    <li>Collect emails</li>
                                    <li>Redirect to connect to me on linkedIn</li>
                                </ul>
                            </li>
                        </ol>
                        <h3 className="mb-3 font-bold">Time limit:</h3>
                        <ol className="list-decimal list-inside mb-3">
                            <li>7 days to complete the MVP</li>
                            <ul className="list-disc list-inside ml-5 p-4">
                                <li>6 - 12 November</li>
                            </ul>
                            <li>7 days to write LinkedIn articles and use my tool to work out kinks, understand the end user by becoming them and also market the tool through using it</li>
                            <ul className="list-disc list-inside ml-5 p-4">
                                <li>13-19 November</li>
                                <li className="mb-3">Can add a watermark to the AI images like: this Topic was suggested by [product name]</li>
                            </ul>
                        </ol>
                        <h3 className="mb-3 font-bold">Description:</h3>
                        <p className="mb-3">Instead of generating watered down trash content pollution, this tool will suggest the topics and write a brainstorm draft to be used by the user to select which topics and sub-topics he likes to then create a first crap draft which the user can fill in or start from scratch.</p>
                        <h3 className="mb-3 font-bold">Name & mission</h3>
                        <p className="mb-3">Llamapost or postllama 🦙 with a mlll hat meaning make LinkedIn less lame</p>
                        <p>The second feature will be turning a meme/gif/funny video into your profile video</p>
                        <hr></hr>
                        <h3 className="mb-3 font-bold">Other ideas:</h3>
                        <p className="mb-3">What can I make in a week that I can show to people and have them use? If it doesn’t work I can discard?</p>
                        <ul className="list-disc list-inside mb-3">
                            <li>AI mask photo editing - a very good free one already exists</li>
                        </ul>
                        <p className="mb-3">AI carousel - I don’t want to do another indiehacker dirty and copy his idea. It’s fine to take business away from bigger incumbents but not fellow indiehackers who are just getting by. Also, there may be very little need for their product and their success may be subsidized by fans of their journey not their product per se.</p>
                    </div>
                    <h2 className='text-2xl font-extrabold'>The twist</h2>
                    <p>Siddharth told me that he stopped using these kind of tools and his posting experience hasn't suffered that much.</p>

                    <p>But at the end of the meeting he mentioned his current workflow and the tools he uses to make it 'stick' together. He uses an AI transcribing tool called fireflies.ai which outputs the conversation transcript but does a poor job at recording the screen / participants' video. He uses screenapp.io to take care of that. Finally he uploads both the transcript and video to Notion.so. The purpose of all this is to keep track of conversations and their outcomes e.g. whether he promised someone something or vice versa. So the next time he takes a meeting with that person he can reming himself of the interaction.</p>

                    <p>Now that I think of it, the former company which I worked for Testportal also used a third-party tool to transcribe conversations and uploaded them to Google Drive. But they experienced issues when people would forget to paste the transcript to a Google Doc in Google drive.</p>

                    <p>In conclusion, it seems that there is a business need for transcribing conversations, recording calls and storing them, followed by retrieving them in an easy way before the next meeting with the same person.</p>

                    <p>Come to think of it I'm also struggling with managing LinkedIn connections and prior interactions even with simple messages. The only way to manage them is to look throught the chat history which becomes a big pain with lots of outreach messages. Additionally I have no way of tracking conversations outside linkedin and will forget that they took place after some time. There can be so many interactions on LinkedIn that this problem is inevitable with any substantial outreach.</p>

                    <div className='outline outline-black text-black dark:outline-white dark:text-white p-3 rounded flex flex-col justify-between gap-4'>
                        <span className='font-extrabold'>Plan for today:</span>
                        <ol className="list-decimal list-inside p-4 space-y-4">
                            <li>
                                Plan & Research an MVP prototype<br></br>
                                <ul className="list-disc list-inside ml-5 p-4">
                                    <li>Use Zapier or the like to duct-tape a solution.</li>
                                </ul>
                                <div className='font-bold p-4'>Tangible outcome: A plan of how to build a relationship management tool which processes and congregates all interaction data in one place with the option to export it.</div>
                            </li>
                        </ol>
                    </div>

                    <Image
                        src="/images/blog/Photo on 06-11-2023 at 13.52.jpg"
                        alt="day 2 image of Simon in a cafe in seoul"
                        className='object-cover rounded'
                        width={500}
                        height={500}
                    ></Image>
                </article >
                <section className='flex w-full flex-wrap' style={{ marginLeft: '-10px', marginRight: '-10px', color: 'rgb(107 114 128)' }}>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">MicroSaaSJourney</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SoloFounderChronicles</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">SaaSMarketingInsights</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">TheMomTestStrategy</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">LinkedInInnovation</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">StartupNetworking</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">AIContentCreation</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">WorkflowOptimization</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">RelationshipManagementTools</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">ProductivityHacks</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">ConversationalTranscripts</span>
                    <span className="text-xs font-medium px-2.5 py-0.5 rounded">MVPDevelopmentDiary</span>
                </section>
            </div >
        </>
    )
}