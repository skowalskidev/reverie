"use client"

import React, { useEffect, useState } from 'react';
import { setToastCookie } from "@/app/actions";
import { Toast, ToastToggle } from "flowbite-react";
import { FunFact, funFacts } from './FunFact';
import { faArrowLeft, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const CustomToast = () => {
    const [funFactIndex, setFunFactIndex] = useState(-1);
    useEffect(() => {
        const randomIndex = Math.floor(Math.random() * funFacts.length);
        setFunFactIndex(randomIndex);
    }, []);

    const nextFunFact = () => {
        console.log('nextFunFact');
        if (funFactIndex < funFacts.length - 1) {
            setFunFactIndex(funFactIndex + 1);
        } else {
            setFunFactIndex(0);
        }
    }
    const prevFunFact = () => {
        console.log('prevFunFact');
        if (funFactIndex > 0) {
            setFunFactIndex(funFactIndex - 1);
        } else {
            setFunFactIndex(funFacts.length - 1);
        }
    }

    return (
        <Toast className="ml-4 bottom-4 sticky z-20 dark:bg-gray-900 border border-purple-600">
            <div className="w-full">
                <div className="flex items-center mb-3">
                    <span className="mb-1 text-sm shrink-0 font-semibold text-gray-900 dark:text-white">Fun fact</span>
                    <ToastToggle className=" dark:bg-gray-900" onDismiss={() => setToastCookie()} />
                </div>
                <div className="flex items-start">
                    {/* <div className="flex flex-col shrink-0 gap-2 items-center">
                        <img className="w-12 h-12 rounded-full" src="/images/profile.jpeg" alt="Jese Leos image" />
                        <div className="text-sm font-semibold text-purple-600 dark:text-purple-600">Simon AI</div>
                    </div> */}
                    {/* <div className="ms-3 text-sm font-normal"> */}
                    <div className="text-sm font-normal w-full">
                        <div className="text-sm font-normal"><FunFact funFactIndex={funFactIndex} /></div>
                        <div className='flex gap-2 items-center justify-end'>
                            <button onClick={prevFunFact} className='p-1 hover:text-purple-600'>
                                <FontAwesomeIcon icon={faArrowLeft} />
                            </button>
                            <button onClick={nextFunFact} className='p-1 hover:text-purple-600'>
                                <FontAwesomeIcon icon={faArrowRight} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </Toast>
    );
};

export default CustomToast;
