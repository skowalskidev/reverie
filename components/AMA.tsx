'use client';

import { useChat } from 'ai/react';
import Button from './Button';
import Image from 'next/image';
import React from 'react';

const CV = 'Szymon Kowalski Seoul, South Korea skowalskidev@gmail.com linkedin.com/in/kowalskidev Summary Strength: Frontend Development, Native English. Up to date with newest frameworks Next.js, Nuxt.js, Jamstack. Beyond-Work Experience https://reveriezero.com # Web development -> In 2023 I learned Jamstack and used those skills to complete a few freelance projects earning $5k+. -> In 1 month I learned and implemented Next.js 13 (New App Router), Node.js and Sanity.io CMS to reach a page speed score of 100 and deliver a great user experience. # E-Commerce -> In 2018-19 I ran my own E-Commerce store in which I sold ~£3000 in merchandise. -> I ran FB ads and bought Instagram & Youtube Influencer promos to promote my store Experience Full Stack Developer Testportal Jun 2021 - Present (2 years 4 months) -> As a Full Stack Developer at Testportal, I worked on improving the communication of requirements, resulting in a significant increase in productivity of the entire development team. -> Created a better admin tool with backend pagination using Vuetify to increase the customer support team\'s productivity i.e. they no longer had to wait for the user table to load and it looked nice. -> Implemented a new frontend and new features in Vue.js for business use, resulting in a month to month increase in revenue for the company. -> Designed improvements to the proposed UI and UX which increased end-user satisfaction and reduced complexity resulting in faster development time. -> Collaborated with the marketing, copywrighting and customer service teams to find market fit. I was on the team working on the HR-user direction which ended up as the company\'s focus. System Developer Colonel Duck Jun 2016 - Sep 2016 (4 months) -> Programmed 2 Large Scale Management Systems For Willmott Dixon (Construction Company) ->Together with one of my colleagues we designed a new system architecture for an online video training library which incorporates features such as user accounts with varied levels of access, an administrator dashboard, comments under video content, a collection of favorite learning materials and others. In order to do so we researched the best practices for database design and together formed ideas to converge to an optimal solution. -> I made design decisions and implemented Photoshop design mock-ups into fully functioning website components. -> I have learned HTML, CSS, JavaScript, jQuery, AJAX and SQL from scratch within this period to the level of competency where I was very comfortable in switching between all languages and using them in collaboration to create structured solutions to more demanding features. Education UIBE Business School Chinese Language and Literature 2019 - 2020 Peking University Chinese Language and Literature 2018 - 2019 Tsinghua University BSc Computer Science, Computer Science 2017 - 2018 GPA 4.0 (Study year abroad) University of Birmingham BSc Computer Science, Computer Science 2015 - 2021 GPA 4.0 Skills Vue.js • React.js • Next.js • Java • Vuex Honors & Awards TypeScript • Tailwind CSS • Figma (Software) • JavaScript • SQL • Jaguar-Land Rover Project - University of Birmingham Jun 2016 Developed an App Prototype For A Potential Jaguar Land Rover Project ';

export default function AMA() {
    const { messages, input, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
        initialMessages: [{
            id: '0',
            content: CV,
            role: 'user',
            // role: 'system' | 'user' | 'assistant' | 'function'
        }, {
            id: '1',
            content: 'Prompt: answer all questions only related to this resume and nothing else, if the answer is not in the resume, please ask to Contact Simon using the contact button.',
            role: 'user',
        }, {
            id: '2',
            content: 'Hello, I\'ve read Simon\'s resume so you can ask me anything about him!',
            role: 'system',
            // role: 'system' | 'user' | 'assistant' | 'function'
        }],
    });

    //TODO it works badly, make sure to add the context or the final instruction to every prompt

    return (
        <div className='flex flex-col gap-4'>
            <div>
                <ul className="max-h-96 overflow-auto flex flex-col-reverse gap-4 p-2.5 w-full text-sm text-gray-900 rounded-lg border border-purple-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500">
                    {messages.slice(2).reverse().map((m, index) => (
                        <React.Fragment key={index}>
                            {m.role === 'user'
                                ? <li className='flex gap-4 lg:w-4/5 self-end justify-end text-end'>
                                    {m.content}
                                    <span className='text-blue-500'>You</span>
                                </li>
                                : <li className='flex gap-4 lg:w-4/5 self-start justify-start text-start'>
                                    <span className='text-purple-600 flex gap-4 items-center flex-shrink-0'>
                                        <Image
                                            src="/images/profile.jpeg"
                                            alt="Jese image"
                                            className="rounded-full w-10 h-10 object-cover"
                                            width={40}
                                            height={40}
                                        />
                                        Simon AI
                                    </span>
                                    <pre className='font-sans whitespace-pre-wrap'>{m.content}</pre>
                                </li>
                            }
                            {index !== messages.length - 3 && <hr className="text-gray-500 dark:text-gray-400" />}
                        </React.Fragment>
                    ))}
                </ul>

            </div>

            <form onSubmit={handleSubmit} className='flex items-center gap-4'>
                <div className='grow'>
                    <input required value={input} placeholder='Say something...' onChange={handleInputChange} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></input>
                </div>
                <div>
                    <Button type="submit">Ask</Button>
                </div>
            </form>
        </div>
    );
}