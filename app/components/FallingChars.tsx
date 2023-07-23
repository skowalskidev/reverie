import React, { useState, useEffect } from 'react';

type Props = {
    height: number;
};

function FallingChars({ height }: Props) {
    const charHeight = 24; // adjust according to your styling
    const numRows = Math.floor(height / charHeight);
    const trailLength = 10; // the length of the fading trail
    const [column, setColumn] = useState(Array.from({ length: numRows }, () => ' '));
    const [index, setIndex] = useState(0);

    useEffect(() => {
        setColumn(Array.from({ length: numRows }, () => ''));
    }, [height]);

    useEffect(() => {
        const interval = setInterval(() => {
            setColumn(prevColumn => {
                const newColumn = [...prevColumn];
                newColumn[index] = String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33));
                return newColumn;
            });

            setIndex(prevIndex => (prevIndex + 1) % numRows);
        }, 100); // change this number to make it faster or slower

        return () => clearInterval(interval);
    }, [index, numRows]);

    return (
        <div className='flex flex-col justify-center h-full w-4'>
            {column.map((char, i) => {
                let distanceFromIndex = (index - i + numRows) % numRows;
                let opacity = distanceFromIndex > trailLength ? 0 : 1 - distanceFromIndex / trailLength;
                return (
                    <div
                        className={`text-center ${i === index ? 'font-bold text-purple-600' : 'text-purple-300'}`}
                        key={i}
                        style={{ opacity }}>
                        {char}
                    </div>
                );
            })}
        </div>
    );
}

export default FallingChars;
