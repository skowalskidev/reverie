'use client';

import React, { useEffect, useState } from 'react';
import { useChat } from 'ai/react';
import Button from './Button';

const demoAboutYou = 'My name is Simon White, I am a programmer working on a cold outreach tool which will automate your cold outreach messages.';

const demoOffer = 'I wand to give you free access to my tool for you to test out.';

const demoRecipient = "James Hayward-Browne  2nd degree connection2nd Co-founder of creative PR agency Bottled Imagination Talks about #pr, #video, #content, #digital, and #marketingTalks about hashtag pr, hashtag video, hashtag content, hashtag digital, and hashtag marketing Bottled Imagination Manchester, England, United Kingdom  Contact info https://bottledimagination.com 14,329 followers 500+ connections Noel Mack is a mutual connectionNoel Mack is a mutual connection Follow Message More FeaturedFeatured PostPost Today is an amazing, exciting day at Bottled Imagination. We’ve hired our first full time team member! When we first advertised this job we didn’t have a website, we didn’t have any social profiles, but we had the work. So thrilled to welcome Luci Schalch to the team. This is just the beginning 🔥 🎉 No alternative text description for this image likecelebratelove 105 PostPost Everyone in social marketing HAS and IS talking about TikTok 🥱. But how I prefer to frame it is the actual format of the content... 📱Vertical video Yes, TikTok is huge right now. But so is IG reels, Snap & YouTube shorts. Not every brand has the capacity or capabilities to be on every single social channel. But each platform is currently pushing this content the most. My advice? If you aren't posting vertical video content on your socials, the best time to start is right now 📈 Shoot the video with mobile first in mind, then optimise for the specific channel. I guarantee it will grow your channels faster than that photo you posted on IG last week. hashtag#video hashtag#content No alternative text description for this image likecelebratelove 118 8 comments PostPost TikTok is not just a brand awareness platform. Look at the recent Little Moons trend... Google trend search data shows a huge spike in traffic that prompted a 700% increase in sales at Tesco🤯 What you might not have known is a small amount of paid advertisement went behind the original video but the trend quickly took off and the campaign spread quickly due to TikToks virality 🚀 No alternative text description for this image likeinsightfulcelebrate 1,288 22 comments ActivityActivity 14,329 followers14,329 followers Follow Posts Comments Videos Images Documents Loaded 3 Posts posts James Hayward-Browne posted this • 4d4d Another career high point. BrightonSEO talk completed ✅ Loved speaking on stage all around the rise of black hat digital PR tactics and our responsibility to the media industry. If you want to check out my slides check the comments box 👇 Can you guess what this slide was about?…show more likecelebratelove 117 30 comments James Hayward-Browne posted this • 6d6d Landed in Brighton for my first in-person industry talk in 2 years. Can't wait to meet some LinkedIn faces, I've got a very busy calendar but I’ll fit you in if you ask nicely 😉 likecelebratelove 132 3 comments James Hayward-Browne reposted this • 6d6d No alternative text description for this image likelovecelebrate 5,565 134 comments 288 reposts Show all posts AboutAbout Co-founder of creative PR agency Bottled Imagination Creative turned marketer. Worked with national and international brands to help grow their organic search revenue. Lover of all things social, brand & search.Co-founder of creative PR agency Bottled Imagination Creative turned marketer. Worked with national and international brands to help grow their organic search revenue. Lover of all things social, brand & search. Top skillsTop skills Public Relations • Search Engine Optimization (SEO)Public Relations • Search Engine Optimization (SEO) ExperienceExperience Bottled Imagination logo Co-founder & Marketing DirectorCo-founder & Marketing Director Bottled Imagination · Full-timeBottled Imagination · Full-time Jun 2022 - Present · 1 yr 4 mosJun 2022 - Present · 1 yr 4 mos Manchester Area, United KingdomManchester Area, United Kingdom Co-founder and Marketing Director of digital PR and content marketing agency Bottled ImaginationCo-founder and Marketing Director of digital PR and content marketing agency Bottled Imagination Rise at Seven | Search-First Creative Agency logo Rise at SevenRise at Seven Full-time · 2 yrsFull-time · 2 yrs Sheffield, England, United KingdomSheffield, England, United Kingdom Marketing ManagerMarketing Manager Jan 2021 - Jun 2022 · 1 yr 6 mosJan 2021 - Jun 2022 · 1 yr 6 mos Content CreatorContent Creator Jul 2020 - Jan 2021 · 7 mosJul 2020 - Jan 2021 · 7 mos Content CreatorContent Creator http://www.jameshaywardbrowne.com/ · Freelancehttp://www.jameshaywardbrowne.com/ ·"

export default function ColdOutreach() {
    const { messages, handleInputChange, handleSubmit } = useChat({
        api: '/api/chat',
    });

    const [aboutYou, setAboutYou] = useState('');
    const [yourOffer, setYourOffer] = useState('');
    const [aboutRecipient, setAboutRecipient] = useState('');

    useEffect(() => {
        const promptTitle = 'Craft a cold outreach message (300 chars) for the following';
        const promptAbout = 'About me';
        const promptOffer = 'About my offer';
        const promptRecipient = 'About my recipient';
        const concatenatedMessage = `${promptTitle}\n\n${promptAbout}\n\n${aboutYou}\n\n${promptOffer}\n\n${yourOffer}\n\n${promptRecipient}\n\n${aboutRecipient}`;

        handleInputChange({ target: { value: concatenatedMessage } } as React.ChangeEvent<HTMLInputElement>);
    }, [aboutYou, yourOffer, aboutRecipient]);

    const handleFormSubmit = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();
        handleSubmit(e);
    };

    const [clipboardStatus, setClipboardStatus] = useState('');

    const handleCopyToClipboard = () => {
        const textToCopy = messages.filter((m) => m.role !== 'user').map((m) => m.content).join('\n\n');
        navigator.clipboard.writeText(textToCopy).then(() => {
            setClipboardStatus('Copied to clipboard');
        }).catch(() => {
            setClipboardStatus('Failed to copy');
        });
    };

    return (
        <section className='mx-auto w-full max-w-2xl flex flex-col gap-5'>
            <div>
                <Button onClick={() => {
                    setAboutYou(demoAboutYou);
                    setYourOffer(demoOffer);
                    setAboutRecipient(demoRecipient);
                }}
                    color='bg-gray-300'>
                    Fill with Demo Data
                </Button>
            </div>

            <form onSubmit={handleFormSubmit} className='flex flex-col gap-5 mt-4'>
                <div>
                    <label htmlFor="aboutYou" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About you</label>
                    <textarea required id="aboutYou" rows={2} value={aboutYou} onChange={(e) => setAboutYou(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <div>
                    <label htmlFor="yourOffer" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your offer</label>
                    <textarea required id="yourOffer" rows={2} value={yourOffer} onChange={(e) => setYourOffer(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <div>
                    <label htmlFor="aboutRecipient" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">About your recipient</label>
                    <textarea required id="aboutRecipient" rows={6} value={aboutRecipient} onChange={(e) => setAboutRecipient(e.target.value)} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
                </div>
                <Button type="submit">Generate</Button>
            </form>
            <div>
                <label htmlFor="coldOutreach" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">Your cold outreach message</label>
                <textarea id="coldOutreach" rows={6} value={messages.filter((m) => m.role !== 'user').map((m) => m.content).join('\n\n')} className="block p-2.5 w-full text-sm text-gray-900 rounded-lg border border-purple-600 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-900 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"></textarea>
            </div>
            <Button color='bg-gray-300' onClick={handleCopyToClipboard}>Copy to Clipboard</Button>
            {clipboardStatus && <div>{clipboardStatus}</div>}
        </section>
    );
}
