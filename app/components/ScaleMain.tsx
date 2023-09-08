"use client"

import React, { useEffect, useRef, useState } from 'react';
import DrippingColumn from './DrippingColumn';

interface MainComponentProps {
    children: React.ReactNode;
}

const MainComponent: React.FC<MainComponentProps> = ({ children }) => {
    const mainRef = useRef<HTMLDivElement>(null);
    const [mainHeight, setMainHeight] = useState(0);

    useEffect(() => {
        if (mainRef.current) {
            const mainHeight = mainRef.current.clientHeight;
            setMainHeight(mainHeight);
        }
    }, []);

    return (
        <main ref={mainRef} className="mx-auto max-w-screen-lg">
            <section className="hidden lg:flex absolute justify-center mx-auto left-0 right-0 pointer-events-none">
                <div className='flex shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl dark:shadow-none dark:bg-gray-950'>
                    <DrippingColumn height={mainHeight} />
                    <DrippingColumn height={mainHeight} />
                    <DrippingColumn height={mainHeight} />
                    <DrippingColumn height={mainHeight} />
                    <DrippingColumn height={mainHeight} />
                    <DrippingColumn height={mainHeight} />
                </div>
            </section>
            <section className="lg:hidden pointer-events-none">
                <div className='absolute left-0 flex shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl dark:shadow-none dark:bg-gray-950'>
                    <DrippingColumn height={mainHeight} />
                </div>
                <div className='absolute right-0 flex shadow-[inset_0_0_10px_rgba(0,0,0,0.1)] rounded-xl dark:shadow-none dark:bg-gray-950'>
                    <DrippingColumn height={mainHeight} />
                </div>
            </section>
            {children}
        </main>
    );
};

export default MainComponent;

