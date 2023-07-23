import React, { useState, useEffect } from 'react';

type Props = {
    height: number;
};


type Char = TrailingChar | FallingChar;

enum CharType {
    TRAILING,
    FALLING,
}

type CharBase = {
    type: CharType;
    char: string;
}

type TrailingChar = CharBase & {
    opacity: number;
};

type FallingChar = CharBase;

function generateColumn(numRows: number): Char[] {
    return [
        {
            char: String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)),
            type: CharType.FALLING,
        },
        ...Array.from({ length: numRows - 1 }, () => {
            return {
                type: CharType.TRAILING,
                char: '0',
                opacity: 0,
            };
        })];
}

function DrippingColumn({ height }: Props) {
    const numRows = 20;
    const trailLength = 10;
    const [chars, setChars] = useState([]);
    useEffect(() => {
        setChars(generateColumn(numRows));
    }, [height]);

    function addNewChar() {
        console.log('timeout');
        const newChar: FallingChar = {
            char: String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)),
            type: CharType.FALLING,
        };

        setChars(prevChars => [newChar, ...prevChars.slice(1)]);

        // Set a new timeout with a random interval between 100 and 500 milliseconds
        const randomInterval = Math.random() * (1500 - 1000) + 1000;
        setTimeout(addNewChar, randomInterval);
    }

    useEffect(() => {
        // Start the first execution
        addNewChar();

        const mainLoop = setInterval(() => {
            setChars((prevChars: Char[]) => {
                const newChars = [...prevChars];
                for (let index = 0; index < newChars.length; index++) {
                    let char = newChars[index];
                    if (char.type === CharType.FALLING) {
                        newChars[index] = {
                            char: char.char,
                            type: CharType.TRAILING,
                            opacity: 1,
                        } as TrailingChar;
                        const nextIndex = index += 1;
                        if (nextIndex < numRows) {
                            newChars[nextIndex] = {
                                char: String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)),
                                type: CharType.FALLING,
                            } as FallingChar;
                        }
                    } else {
                        if (char.opacity > 0) {
                            newChars[index] = {
                                ...newChars[index],
                                opacity: char.opacity - 0.1,
                            } as TrailingChar;
                        }
                    }
                }

                return newChars;
            });
        }, 100);
    }, []);

    return (
        <div className='flex flex-col justify-center h-full w-4'>
            {chars.map((char: Char, i) => {
                return (
                    <div
                        className={`text-center ${char.type === CharType.FALLING ? 'font-bold text-purple-600' : 'text-purple-300'}`}
                        key={i}
                        style={{
                            opacity: char.opacity != null ? char.opacity : 1,
                        }}>
                        {char.char}
                    </div>
                );
            }, [])}
        </div>
    );
}

export default DrippingColumn;
