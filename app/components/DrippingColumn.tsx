import React, { useState, useEffect, useRef } from 'react';

type Props = {
    height: number;
};

enum CharType {
    TRAILING,
    FALLING,
}

type Char = {
    type: CharType;
    char: string;
    opacity: number;
}

function generateColumn(numRows: number): Char[] {
    return [
        {
            char: String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)),
            type: CharType.FALLING,
            opacity: 1,
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
    const charHeight = 24; // adjust according to your styling
    const numRowsRef = useRef(Math.floor(height / charHeight));
    const [chars, setChars] = useState<Char[]>([]);

    useEffect(() => {
        setChars(generateColumn(numRowsRef.current));
    }, [height]);

    // Update numRowsRef whenever height changes
    useEffect(() => {
        numRowsRef.current = Math.floor(height / charHeight);
    }, [height]);

    function addNewChar() {
        const newChar: Char = {
            char: String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)),
            type: CharType.FALLING,
            opacity: 1,
        };

        setChars(prevChars => [newChar, ...prevChars.slice(1)]);

        // Set a new timeout with a random interval between 100 and 500 milliseconds
        const randomInterval = Math.random() * (15000 - 2000) + 2000;
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
                        } as Char;
                        const nextIndex = index += 1;
                        if (nextIndex < numRowsRef.current) {
                            newChars[nextIndex] = {
                                char: String.fromCharCode(Math.floor(Math.random() * (126 - 33) + 33)),
                                type: CharType.FALLING,
                            } as Char;
                        }
                    } else {
                        if (char.opacity > 0) {
                            newChars[index] = {
                                ...newChars[index],
                                opacity: char.opacity - 0.1,
                            } as Char;
                        }
                    }
                }

                return newChars;
            });
        }, 100);
    }, [numRowsRef.current]);

    return (
        <div className='flex flex-col justify-center h-full w-4'>
            {chars.map((char: Char, i) => {
                return (
                    <div
                        className={`text-center text-xs ${char.type === CharType.FALLING ? 'font-bold text-purple-600' : 'text-purple-300'}`}
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
