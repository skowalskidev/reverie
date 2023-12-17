"use client";

import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const funFacts = [
    'Google processes over 3.5 billion searches daily',
    'Facebook has 2.8 billion users across all continents',
    '5 billion YouTube videos watched daily',
    'Amazon ships 1.6 million packages per day',
    'Twitter sees 500 million tweets sent daily',
    'Instagram hosts 95 million photo uploads daily',
    '306 billion emails sent globally every day',
    'TikTok has 1 billion active users',
    'LinkedIn connects 810 million professionals',
    'Snapchat sees 5 billion snaps created daily',
    'Netflix streams 1 billion hours weekly',
    'Spotify offers over 70 million songs',
    'Apple App Store features 2.2 million apps',
    'WhatsApp sees 100 billion messages sent daily',
    'Tesla has 1 million electric cars on the roads',
]

const getFunFact = () => {
    const randomIndex = Math.floor(Math.random() * funFacts.length);
    return funFacts[randomIndex];
}

export const FunFact = () => {
    const [randomFact, setRandomFact] = useState('');
    useEffect(() => {
        setRandomFact(getFunFact());
    }, [])

    return randomFact === '' ? <Skeleton /> : randomFact;
};