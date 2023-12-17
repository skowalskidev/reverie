"use client";

import { useEffect, useState } from "react";
import Skeleton from "./Skeleton";

const funFacts = [
    'Internet\'s birth: 1969, ARPANET sparked the digital revolution.',
    '40% global population online - a virtual world for billions!',
    '1.88 billion websites - a vast cyber universe to explore.',
    'Emoji: modern language transcending words and borders.',
    'Google\'s origin: "Backrub" search engine, an intriguing start.',
    'Cat videos rule - feline fascination knows no bounds!',
    'Internet addiction real - the digital siren\'s call.',
    '3.5 billion daily searches - endless quest for knowledge.',
    '1st webcam captured a coffee pot\'s daily drama.',
    'YouTube, 1B+ users - a stage for creativity worldwide.',
    'Amazon\'s humble beginning as an online bookstore.',
    '90 trillion emails/year - a digital tidal wave.',
    'World\'s largest library - knowledge at your fingertips.',
    '50+ million tweets/day - the world\'s constant conversation.',
    'Internet of Things (IoT) connects everyday objects to the web.',
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